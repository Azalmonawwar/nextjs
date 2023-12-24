import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const query = request.nextUrl.searchParams;
    const category = query.get("category");
    const data = category?.split("-");

    if (!data) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    //getting product by category and department
    const products = await Product.aggregate([
      { $match: { category: data[1] } },
      { $match: { department: data[0] } },
      { $limit: 25 },
    ]);

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
