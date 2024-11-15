import connectDB from "@/config/database";
import User from "@/models/User";
import { connect } from "mongoose";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ], 
  callbacks : {
    // Invoke on successfull Login
    async signIn({profile}) {
        // ------------ STEPS -----------
        // 1. Connect with DB 
        await connectDB();
        // 2. Check if user exists 
        const userExists = await User.findOne({email:profile.email})
        // 3. If not then add user to DB
        if (!userExists){
            // Truncate username of the user if it's too long 
            const username = profile.name.slice(0, 25 )

            await User.create({
                email: profile.email,
                username: username,
                image : profile.picture 
            });
        }
        // 4. return true to allow sign in 
        return true
    }, 
    // Modifies the session object 
    async session({session}){
        // 1. Get User from DB
        const user = await User.findOne({email:session.user.email})
        console.log("USER ->", session.user.email)
        console.log("User From DB =>", user)
        // 2. Assign the user id to the session 
        session.user.id = user._id.toString();
        // 3. return session 
        return session;
    }
  }
}