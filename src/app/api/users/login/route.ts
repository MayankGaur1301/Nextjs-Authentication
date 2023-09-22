import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if User Exists?
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User Does Not Exist" },
        { status: 400 }
      );
    }

    // If User Exists, then compare the password
    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json(
        { messag: "Invalid Password" },
        { status: 400 }
      );
    }

    // Create Token Data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create/generate Token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Successfull",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;    

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
