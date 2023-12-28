import jwt from "jsonwebtoken";

export const getUserFromToken = (token: any) => {
  try {
    const decodedToken: any = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET!
    );
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
