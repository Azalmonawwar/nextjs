import { NextResponse,NextRequest } from "next/server";

//logout function

export async function GET(request:NextRequest){
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        // response.cookies.set("token", "", 
        // { httpOnly: true, expires: new Date(0) 
        // });
        response.cookies.delete("token");
        return response;
    } catch (error) {
        return NextResponse.json({message :'Something went wrong'},{status:500});
    }
    
}