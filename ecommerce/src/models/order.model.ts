import { Schema,model,models } from "mongoose";
//Schema for order
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
        {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        }
    ],
    shippingAddress: {
      id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Shipping",
      },
    },
    paymentMethod: {
      type: String,
      default: "COD",
      required: false,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//export model
const Order = model("Order", orderSchema);
export default Order;