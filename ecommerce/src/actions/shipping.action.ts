'use server';
import Shipping from "@/models/shipping.model";
import { connectToDatabase } from "@/db/dbConnect";
import User from "@/models/user.model";

type Inputs = {
    name: string,
    
    address: string,
    city: string,
    state: string,
    pincode: string,
    phone: string,
    district: string
}
export async function createShipping(shipping: Inputs, userId: string) {
    try {
        await connectToDatabase();
        if(!shipping.name  || !shipping.address || !shipping.city || !shipping.state || !shipping.pincode || !shipping.phone) {
            const response = {
                status: false,
                message: "Please fill all the details"
            }
            return JSON.parse(JSON.stringify(response));
        }
        const user = await User.findOne({_id: userId});

        if(!user) {
            const response = {
                status: false,
                message: "User not found"
            }
            return JSON.parse(JSON.stringify(response));
        }

        const newShipping = await Shipping.create({
            name: shipping.name,
            
            address: shipping.address,
            city: shipping.city,
            state: shipping.state,
            postalCode: shipping.pincode,
            phone: shipping.phone,
            district: shipping.district,
            user: userId
        })
    
        const response = {
            status: true,
            message: "Shipping created successfully",
            data: newShipping
        }
        return JSON.parse(JSON.stringify(response));
    } catch (error:any) {
        const response = {
            status: false,
            message: error.message
        }
        return JSON.parse(JSON.stringify(response));
    }
}