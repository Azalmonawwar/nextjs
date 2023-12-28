import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";
import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest){
    await connectToDatabase();
    const products = await Product.find({});
    const response = NextResponse.json(products);
}