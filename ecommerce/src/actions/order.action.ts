import { connectToDatabase } from "@/db/dbConnect";
import  Order  from "@/models/order.model";


//get all orders by id

export async function getOrders(user:string) {
    try {
        await connectToDatabase();
        const orders = await Order.find({user:user});
        const response = JSON.parse(JSON.stringify(orders));
        return response;
    } catch (error:any) {
        const response = {
            status: 500,
            message: error.message
        }
        return JSON.parse(JSON.stringify(response));
    }
}

//generate order
export async function generateOrder(order:any) {
    try {
        await connectToDatabase();
        const result = await Order.create(order);
        
        const response = JSON.parse(JSON.stringify(result));
        return response;
    } catch (error:any) {
        const response = {
            status: 500,
            message: error.message
        }
        return JSON.parse(JSON.stringify(response));
    }
}