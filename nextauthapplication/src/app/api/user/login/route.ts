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
            return NextResponse.json({error:"User not found"},{status:202});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json({error:"Invalid password"},{status:202});
        }
        const tokenData = {
            id: user._id,
            email: user.email
        }
        //create token
        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        },
        {
            status:200
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;
    } catch (error) {
        return NextResponse.json({message:"Login failed"});
    }

}