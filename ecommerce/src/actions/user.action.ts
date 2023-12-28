"use server";
import { connectToDatabase } from "@/db/dbConnect";
import User from "@/models/user.model";
import { getUserFromToken } from "@/utils/getUserFromToken";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
type IUser = {
  name: string;
  email: string;
  password: string;
};
export async function createUser({ email, name, password }: IUser) {
  try {
    await connectToDatabase();
    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      const response = {
        status: 400,
        message: "User already exists",
      };
      return JSON.parse(JSON.stringify(response));
    }
    //create user
    const newUser = await User.create({ fullName: name, email, password });
    if (!newUser) {
      const response = {
        status: 400,
        message: "User not created",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const response = {
      status: 201,
      message: "User created successfully",
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    return error.message;
  }
}

type Login = {
  email: string;
  password: string;
};

//login user
export async function login({ email, password }: Login) {
  try {
    await connectToDatabase();

    if (!email || !password)
      return {
        status: 400,
        message: "Please fill all the fields.",
      };

    //finding user
    const user = await User.findOne({ email });

    //comparing password
    const isPasswordMatch = await user.comparePassword(password);

    //if password doesn't match
    if (!isPasswordMatch)
      return {
        status: 400,
        message: "Invalid credentials.",
      };

    //creating token
    const token = jwt.sign(
      { id: user._id, email: user.email, fullName: user.fullName },
      process.env.NEXT_PUBLIC_JWT_SECRET!,
      { expiresIn: "1d" }
    );
    if (!token)
      return {
        status: 400,
        message: "Something went wrong.",
      };

    const isLoggedIn = await User.findOne({ email: user.email }).select(
      "-password"
    );
    if (!isLoggedIn)
      return {
        status: 400,
        message: "Something went wrong.",
      };

    //setting token value in cookie
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
    });

    const response = {
      status: 200,
      message: "User logged in successfully.",
      success: true,
      user: isLoggedIn,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    return {
      status: 400,
      message: error.message,
    };
  }
}

//get user from token
export async function getUser() {
  try {
    await connectToDatabase();
    const token: any = cookies().get("token");
    const decoded: any = await getUserFromToken(token.value);
    const user = await User.findById(decoded).select(
      "-password -createdAt -updatedAt "
    );
    if (!user) {
      const response = {
        status: 400,
        message: "User not found",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const response = {
      status: 200,
      message: "User found successfully",
      user,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    return error.message;
  }
}
