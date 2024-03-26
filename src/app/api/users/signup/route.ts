import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user_model";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
    try {
        console.log("00000000000000000000000")
        await connectMongoDB(); 
        const users = await User.find(); 
        console.log("00000000", users)
        return NextResponse.json({ message: "Users Listed Successfully", users }, { status: 200 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 

export const POST = async (request: any) => {
    try {
        const { name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber } = await request.json(); 
        console.log("all is coming: ", name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber)
        await connectMongoDB();
        const user = {name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber}
        await User.create(user); 
        return NextResponse.json({ message: "User Created Successfully", user }, { status: 201 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 