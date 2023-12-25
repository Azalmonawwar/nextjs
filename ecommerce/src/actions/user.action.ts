"use server";
import { connectToDatabase } from "@/db/dbConnect";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
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
