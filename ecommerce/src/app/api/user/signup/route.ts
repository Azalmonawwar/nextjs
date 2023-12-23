import { NextRequest,NextResponse } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import User from "@/models/user.model";

export async function POST(request:NextRequest){
    try {
        await connectToDatabase();
        const {fullName, email,password} = await request.json();
        
        //check if user already exists
        const user = await User.findOne({email});
        if(user) return NextResponse.json({message: "User already exists."});

        //create user 
        const newUser = await User.create({fullName, email, password});
        if(!newUser) return NextResponse.json({message: "Something went wrong."});

        return NextResponse.json({message: "User created successfully."});

    } catch (error:any) {
        return NextResponse.json({message: error.message});
    }
}