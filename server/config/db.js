import mongoose from "mongoose";

const dbConnect = async ()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://goyankaastha41:feVEvF3sXQZD2z9V@cluster0.7jebq.mongodb.net/news')
        console.log('MONGODB CONNECTED')
        
    } catch (error) {
        console.log(error)
    }
}



export default dbConnect;