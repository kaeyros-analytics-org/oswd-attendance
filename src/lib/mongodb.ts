import mongoose from "mongoose";

// const MONGODB_URI = "mongodb+srv://arielmboma:xcsfvmLlFqmB8RTT@owsd-contact.m5hxq1g.mongodb.net/owsd-contact"
const connectMongoDB = async () => {
    try {
        // await mongoose.connect(process?.env?.MONGODB_URI as string);
        await mongoose.connect(process?.env?.MONGODB_URI_2 as string);
        // await mongoose.connect(MONGODB_URI);
        console.log("Connected to client Database")
    } catch (error) {
        console.log("Problem connecting to owsd_contacts Database")
    }
}

export default connectMongoDB