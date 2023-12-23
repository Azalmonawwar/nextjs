import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user.model";
import { connectToDatabase } from "@/db/dbConnect";
import { getUserFromToken } from "@/utils/getUserFromToken";


export async function GET(request:NextRequest){
    try {
        await connectToDatabase();
        const userId = await getUserFromToken(request);
        const user = await User.findById(userId).select('-password');
        return NextResponse.json({
            success: true,
            user,
        })

    } catch (error:any) {
        return NextResponse.json({message: error.message});
    }
}