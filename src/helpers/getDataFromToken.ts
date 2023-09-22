import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromtoken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = await jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    );
    return decodedToken._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
 