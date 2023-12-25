"use server";
import { connectToDatabase } from "@/db/dbConnect";
import Product from "@/models/products.model";
import mongoose from "mongoose";
interface Product {
  _id: mongoose.Types.ObjectId;
  id: string;
  title: string;
  price: number;
  rating: string;
  category: string;
  department: string;
  image: string;
}
export async function getData(
  category: string,
  department: string
): Promise<Product[]> {
  try {
    await connectToDatabase();

    //getting product by category and department
    const products = await Product.aggregate([
      { $match: { category: category } },
      { $match: { department: department } },
      { $sample: { size: 20 } },
    ]);

    const response = JSON.parse(JSON.stringify(products));
    return response;
  } catch (error) {
    console.log(error);
    const empty = [
      {
        _id: new mongoose.Types.ObjectId(),
        id: "",
        title: "",
        price: 0,
        rating: "",
        category: "",
        department: "",
        image: "",
      },
    ];
    return empty;
  }
}

//get data by id
export async function getDataById(id: string): Promise<Product[]> {
  try {
    await connectToDatabase();

    //getting product by category and department
    const products = await Product.find({ id: id });
    const response = JSON.parse(JSON.stringify(products));
    return response;
  } catch (error) {
    console.log(error);
    const empty = [
      {
        _id: new mongoose.Types.ObjectId(),
        id: "",
        title: "",
        price: 0,
        rating: "",
        category: "",
        department: "",
        image: "",
      },
    ];
    return empty;
  }
}

//get data by highest price
export async function getDataByHighestPrice(): Promise<Product[]> {
  try {
    await connectToDatabase();

    //getting product by category and department
    const products = await Product.aggregate([
      { $match: { department: "women" } },
      { $sort: { price: -1 } },
      { $limit: 4 },
    ]);
    const response = JSON.parse(JSON.stringify(products));
    return response;
  } catch (error) {
    console.log(error);
    const empty = [
      {
        _id: new mongoose.Types.ObjectId(),
        id: "",
        title: "",
        price: 0,
        rating: "",
        category: "",
        department: "",
        image: "",
      },
    ];
    return empty;
  }
}

//get one product of each department

type DepProduct = {
  _id: string;
  product: Product;
};
export async function getDataByDepartment(): Promise<DepProduct[]> {
  try {
    await connectToDatabase();

    //getting product by category and department
    const products = await Product.aggregate([
      { $group: { _id: "$department", product: { $first: "$$ROOT" } } },
    ]);
    const response = JSON.parse(JSON.stringify(products));
    return response;
  } catch (error) {
    console.log(error);
    const empty = [
      {
        _id: "",
        product: {
          _id: new mongoose.Types.ObjectId(),
          id: "",
          title: "",
          price: 0,
          rating: "",
          category: "",
          department: "",
          image: "",
        },
      },
    ];
    return empty;
  }
}
