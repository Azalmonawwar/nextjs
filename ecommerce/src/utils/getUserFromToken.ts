import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUserFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET!
    );
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
