// cart model
import { Schema, model, models, Document } from "mongoose";


//interface for cart
interface ICart extends Document {
    user: Schema.Types.ObjectId;
    products: {
        product: string;
        quantity: number;
    }[]
}

//Schema for cart
const cartSchema = new Schema<ICart>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity can not be less then 1."],
                default: 1
            }
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

const Cart =  models.Cart || model<ICart>('Cart', cartSchema);

export default Cart;