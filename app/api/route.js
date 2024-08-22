import connectDB from "@/config/database";

export const GET = async (request) => {
    try{
        await connectDB();
        return new Response(JSON.stringify({'message':'Hello Friends, How it is going with Next js learning'}), {status:200})

    }
    catch (error){
        console.log(error);
        return new Response(JSON.stringify({'error':'Something Went Wrong!'}), {
            status:500
        });
    }

}