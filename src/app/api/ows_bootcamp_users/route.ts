import connectMongoDB from "@/lib/mongodb";
import OwsdUser from "@/models/owsd_user_model";
// import User from "@/models/user_model";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
    try {
        console.log("00000000000000000000000")
        await connectMongoDB(); 
        const owsdUsers = await OwsdUser.find(); 
        // console.log("00000000", owsdUsers)
        return NextResponse.json({ message: "owsdUsers Listed Successfully", owsdUsers }, { status: 200 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 

export const POST = async (request: any) => {
    try {
        const { name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber } = await request.json(); 
        console.log("all is coming: ", name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber)
        await connectMongoDB();
        const owsdUser = {name, surname, phoneNumber, email, gender, dateOfBirth, student, faculty, researchDomain, profession, rLanguageLevel, oswdMenber}
        await OwsdUser.create(owsdUser); 
        return NextResponse.json({ message: "OwsdUsers Created Successfully", owsdUser }, { status: 201 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 