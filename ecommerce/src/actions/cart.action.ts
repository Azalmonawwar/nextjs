"use server";
import Cart from "@/models/cart.model";
import { connectToDatabase } from "@/db/dbConnect";
import { Schema } from "mongoose";

//function to add product to cart

export async function addToCartDb(
  userId: Schema.Types.ObjectId,
  productId: Schema.Types.ObjectId
) {
  try {
    //connect to database
    await connectToDatabase();

    //find cart of user
    const cart = await Cart.findOne({ user: userId });

    //if cart of user exists
    if (cart) {
      //check if product already exists in cart
      const product = cart.products.find(
        (product: any) => product.product == productId
      );

      //if product exists in cart, increase quantity of product
      if (product) {
        await Cart.findOneAndUpdate(
          { _id: cart._id, "products.product": productId },
          { $inc: { "products.$.quantity": 1 } }
        );
      } else {
        //if product does not exist in cart, add product to cart
        await Cart.findOneAndUpdate(
          { _id: cart._id },
          {
            $push: {
              products: {
                product: productId,
                quantity: 1,
              },
            },
          }
        );
      }
    } else {
      //if cart of user does not exist, create cart and add product to cart
      const newCart = await Cart.create({
        user: userId,
        products: [{ product: productId, quantity: 1 }],
      });
    }

    //send response
    return { message: "Product added to cart." };
  } catch (error: any) {
    //if error, send error response
    return { error: error.message };
  }
}

// get cart of user
export async function getCart(userId: Schema.Types.ObjectId) {
  try {
    //connect to database
    await connectToDatabase();

    //find cart of user
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product",
      "_id title price image id"
    );

    //if cart exists, send cart
    if (cart) {
      const response = {
        message: "Cart found.",
        cart: cart,
      };
      return JSON.parse(JSON.stringify(response));
    } else {
      //if cart does not exist, send error response
      return { error: "Cart not found." };
    }
  } catch (error: any) {
    //if error, send error response
    return { error: error.message };
  }
}

//function to remove product from cart
export async function removeFromCart(
  userId: Schema.Types.ObjectId,
  productId: Schema.Types.ObjectId
) {
  try {
    //connect to database
    await connectToDatabase();

    //find cart of user
    const cart = await Cart.findOne({ user: userId });

    //if cart exists
    if (cart) {
      //check if product exists in cart
      const product = cart.products.find(
        (product: any) => product.product == productId
      );

      //if product exists in cart
      if (product) {
        //if quantity of product is greater than 1, decrease quantity of product
        if (product.quantity > 1) {
          await Cart.findOneAndUpdate(
            { _id: cart._id, "products.product": productId },
            { $inc: { "products.$.quantity": -1 } }
          );
        } else {
          //if quantity of product is 1, remove product from cart
          await Cart.findOneAndUpdate(
            { _id: cart._id },
            {
              $pull: {
                products: {
                  product: productId,
                },
              },
            }
          );
        }
      } else {
        //if product does not exist in cart, send error response
        return { error: "Product not found in cart." };
      }
    } else {
      //if cart does not exist, send error response
      return { error: "Cart not found." };
    }

    //send response
    return { message: "Product removed from cart." };
  } catch (error: any) {
    //if error, send error response
    return { error: error.message };
  }
}
