"use server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";

export async function getData(category: string, department: string) {
  try {
    await connectToDatabase();

    //getting product by category and department
    const products = await Product.aggregate([
      { $match: { category: category } },
      { $match: { department: department } },
      { $limit: 25 },
    ]);

    return products;
  } catch (error) {
    return error;
  }
}
