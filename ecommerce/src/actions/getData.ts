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
      { $match: { department: "women", category: "suits" } },
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

//get data by search query

export async function getDataBySearchQuery(query: string,page: number,limit: number) {
  try {
    await connectToDatabase();
    const regex = new RegExp(query, 'i');

    const matchStage = {
        $match: {
            $or: [
                { title: { $regex: regex } },
                { department: { $regex: regex } },
                { category: { $regex: regex } },
                // ... add other fields you want to search
            ],
        },
    };


    const skipStage = {
        $skip: (page - 1) * limit,
    };

    const limitStage = {
        $limit: limit,
    };

   

    const results = await Product.aggregate([
        matchStage,
        skipStage,
        limitStage,
    ]);
    
    
    const response = JSON.parse(JSON.stringify(results));
    return response;

  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify(error),
    };
    return JSON.parse(JSON.stringify(response));
  }
}


// get length of search query
export async function getLengthOfSearchQuery(query: string) {
  try {
    await connectToDatabase();
    const regex = new RegExp(query, 'i');

    const matchStage = {
        $match: {
            $or: [
                { title: { $regex: regex } },
                { department: { $regex: regex } },
                { category: { $regex: regex } },
                // ... add other fields you want to search
            ],
        },
    };

    const countStage = {
        $count: 'count',
    };

    const results = await Product.aggregate([
        matchStage,
        countStage,
    ]);

    const response = JSON.parse(JSON.stringify(results));
    return response;

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}

//get data by hightest rating
export async function getDataByHighestRating(){
  try {
    await connectToDatabase();

    const products = await Product.aggregate([
      { $match: { department: "men", category: "shirt" } },
      { $sort: { rating: -1 } },
      { $limit: 6 },
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



//get data by many category 
export async function getDataByManyCategory(){
  try {
    await connectToDatabase();

    const products = await Product.aggregate([
      { $match: { category: {$in: ['heels'] },department:"women" },},
        // { $sort: { rating:  } },
        { $limit: 3 },
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