import { NextResponse,NextRequest } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";

export async function POST (request:NextRequest){
   try {
    await connectToDatabase();

    const {email,password} = await request.json();
    if(!email || !password) return NextResponse.json({message: "Please fill all the fields."});
    

    //finding user
    const user = await User.findOne({email});

    //comparing password
    const isPasswordMatch = await user.comparePassword(password);
    

    //if password doesn't match
    if(!isPasswordMatch) return NextResponse.json({message: "Invalid credentials."});
    

    //creating token
    const token = jwt.sign({id: user._id,email:user.email,fullName :user.fullName}, process.env.JWT_SECRET!, {expiresIn: "1d"});
    if(!token) return NextResponse.json({message: "Something went wrong."});
    

    const isLoggedIn = await User.findOne({email: user.email}).select('-password');
    if(!isLoggedIn) return NextResponse.json({message: "Something went wrong."});
     const response = NextResponse.json({
         message: "User logged in successfully.",
         success: true,
         user: isLoggedIn,
     })
     

     //setting token value in cookie
     response.cookies.set("token", token, {
         httpOnly: true,
     });
      
     return response;
   } catch (error:any) {
        return NextResponse.json({message: error.message});
   }
}