import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConnect";
import { User } from "@/models/user.model";
import bcrypt from 'bcrypt'
connect()

type Data= {
    name:string;
    email:string;
    password:string;
}
export async function POST(req:NextRequest){
    try {
        const data:Data = await req.json()
        const check = await User.findOne({email:data.email})
        if(check){
            return NextResponse.json({error:'Email already exists'}, {status:202})
        }
        if(data.password.length<8){
            return NextResponse.json({message:'Password must be at least 8 characters'}, {status:400})
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(data.password,salt)
        const user = await User.create({...data,password:hash})
        if(!user){
            return NextResponse.json({message:'Something went wrong'}, {status:400})
        }
    
        return NextResponse.json({message:'User created successfully',user}, {status:201})       
    } catch (error) {
        return NextResponse.json({message:'Something went wrong'}, {status:404})
    }

}