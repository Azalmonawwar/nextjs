import { getUserFromToken } from "@/utils/getUserFromToken";
import { NextRequest, NextResponse } from "next/server";
import {User} from "@/models/user.model";
import { connect } from "@/dbConfig/dbConnect";

connect();

export async function GET(request:NextRequest){

    try {
        const userId = await getUserFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}