

import mongoose, { Schema } from "mongoose"; 

const userSchema = new Schema(
    {
        name: {
            type: String, 
            required: [true, "Please provide a username"], 
            // unique: true, 
        }, 
        surname: {
            type: String, 
            required: [true, "Please provide a username"], 
            // unique: true, 
        }, 
        phoneNumber: {
            type: Number, 
            required: [true, "Please provide a phone number"], 
            unique: true, 
        }, 
        email: {
            type: String, 
            required: [true, "Please provide a email"], 
            unique: true, 
        }, 
        gender: {
            type: String, 
        }, 
        dateOfBirth: {
            type: String, 
        }, 
        student: {
            type: Boolean
        }, 
        faculty: {
            type: String, 
        },
        researchDomain: {
            type: String, 
        }, 
        profession: {
            type: String
        }, 

        rLanguageLevel: {
            type: String
        }, 

        oswdMenber: {
            type: Boolean
        }, 
    }, 
    {
        timestamps: true, 
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema); 

export default User; 