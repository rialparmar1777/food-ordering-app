"use server"
import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST(req) {
     // Ensure this runs on the server

    const body = await req.json();

    await mongoose.connect(process.env.MONGO_URL);
    const createdUser = await User.create(body);

    return Response.json(createdUser);
}
