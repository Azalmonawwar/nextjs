import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const query = request.nextUrl.searchParams;
    const id = query.get("id");
    const products = await Product.find({ id });
    return NextResponse.json(
      { message: "product fetch successfully", products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
