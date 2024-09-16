import mongoose from 'mongoose';

let connected = false;

let connectDB = async ()=>{
    mongoose.set('strictQuery', true);

    // If DB is already connected, don't connect it again
    if (connected){
        console.log("Database is already connected...")
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
        console.log("Database connected... ")
    }
    catch(error){
        console.log(error);
    }

}

export default connectDB; 