

import mongoose, { Schema } from "mongoose"; 

const clientSchema = new Schema(
    {
        fullName: {
            type: String, 
            required: [true, "Please provide a username"], 
            // unique: true, 
        }, 
        email: {
            type: String, 
            required: [true, "Please provide a email"], 
            unique: true, 
        }, 
        phoneNumber: {
            type: Number, 
            required: [true, "Please provide a phone number"], 
            unique: true, 
        }, 
        companyName: {
            type: String, 
            // required: [true, "Please provide a username"], 
        }, 
        interestingService: {
            type: String, 
            // required: [true, "Please provide a username"], 
        }, 
    }, 
    {
        timestamps: true, 
    }
)

const Clients = mongoose.models.Clients || mongoose.model("Clients", clientSchema); 

export default Clients; 