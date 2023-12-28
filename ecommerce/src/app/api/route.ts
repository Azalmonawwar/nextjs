import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){
    await connectToDatabase();
    // adding many products 
    const data = await request.json();
    const products = await Product.insertMany(data);
    return NextResponse.json(products, {status: 201});
    
}