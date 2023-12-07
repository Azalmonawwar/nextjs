import { NextResponse,NextRequest } from "next/server";
import { Todo } from "@/models/todo.model";
import { connect } from "@/dbConfig/dbConnect";
import { User } from "@/models/user.model";
import mongoose from "mongoose";
connect();
type Todo ={
    title:string;
    description:string;
    status:boolean;
    email:string;
} 
export async function POST(req:NextRequest){
    try {
        const {title,description,status,email}:Todo = await req.json();
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({message:"user not found, please register first or login with correct credentials. 😉"}, {status: 404})
        }
        const objId = new mongoose.Types.ObjectId(user?._id);
        const todo = new Todo({title,description,status,user:objId})

        if(todo) {
            await todo.save()
            return NextResponse.json(todo,{status:201})
        }

        
    } catch (error) {
        return NextResponse.json({message:"error occured while creating todo",error},{status:500})
    }
    
}

