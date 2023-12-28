import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){
    await connectToDatabase();
    const {id,title,price,rating,category,department,image} = await request.json();
    const data = {id,title,price,rating,category,department,image};
    const product = await Product.create(data);
    return NextResponse.json({
        message:"Product created successfully",
        product});
}