import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { id, title, price, image, category, department, rating } =
      await request.json();

    if (
      !id ||
      !title ||
      !price ||
      !image ||
      !category ||
      !department ||
      !rating
    ) {
      return NextResponse.json(
        { message: "Please provide all the required fields" },
        { status: 400 }
      );
    }

    const product = await Product.insertMany([
      {
        id,
        title,
        price,
        image,
        category,
        department,
        rating,
      },
    ]);

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
