//product model
import { Schema,model,models,Document, } from "mongoose";

export interface Product extends Document{
    title:string;
    description:string;
    price:number;
    quantity:number;
    image:string;
    size:"S"|"M"|"L"|"XL"|"XXL"|undefined;
    category:string;
    createdAt:Date;
    updatedAt:Date;
}

const productSchema = new Schema<Product>({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:100
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:500
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    quantity:{
        type:Number,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
    },
    size:{
        type:String||undefined,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    }
},{
    timestamps:true,
    versionKey:false
})

const Product = models.Product || model<Product>("Product",productSchema);

export default Product;