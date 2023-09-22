import { getDataFromtoken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const UserId = await getDataFromtoken(request);
    const user = await User.findOne({ id: UserId }).select("-password"); // i dont want password that why -password
    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
