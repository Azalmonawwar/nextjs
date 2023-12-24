import { NextResponse,NextRequest } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";


export async function POST(request:NextRequest){
    try {
        await connectToDatabase();
        const { category } = await request.json();
        const products = await Product.find({category});

        if(!products){
            return NextResponse.json({message:"No product found"},{status:404});
        }

        return NextResponse.json({message:"product fetch successfully",products},{status:200});
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500});
    }
}