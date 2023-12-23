// shipping model
import { Schema, model, models, Document } from "mongoose";


//interface for shipping
interface IShipping extends Document {
    user: Schema.Types.ObjectId;
    address: string;
    city: string;
    postalCode: string;
    state: string;
    district: string;
    phone: string;
    name: string;
}



const shippingSchema = new Schema<IShipping>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    postalCode: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    state: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    district: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    }
}, {
    timestamps: true,
    versionKey: false
})


const Shipping = models.Shipping || model<IShipping>("Shipping", shippingSchema);

export default Shipping;