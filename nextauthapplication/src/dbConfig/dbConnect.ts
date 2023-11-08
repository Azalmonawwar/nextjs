import mongoose from 'mongoose';

const connect = async() => {
    //trying to connect with mongdb atlas 
    try {
        await mongoose.connect(process.env.MONGODB_URI!) 
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            //mongodb connected successfully
            console.log("MongoDb connected successfully");
        })
        connection.on('error',(err)=>{
            // Error on connecting with mongodb
            console.log("MongoDb connection failed",err);
            process.exit();
        })
    }catch (error:any) {
        // if any error occurs then throw error 
        console.log("MongoDb connection failed",error)
        throw new Error(error);
    }
}