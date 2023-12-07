import { User } from "@/models/user.model";
import { NextRequest,NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConnect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
connect();

export async function POST(request:NextRequest){
    try {
        const {email,password} = await request.json();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({message:"User not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json({message:"Invalid password"});
        }
        const tokenData = {
            id: user._id,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;
    } catch (error) {
        return NextResponse.json({message:"Login failed"});
    }

}