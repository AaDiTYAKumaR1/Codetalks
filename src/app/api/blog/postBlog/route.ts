import { connectDb } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import PostBlog from '@/models/post.models'; // Assuming this is your model file
import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/utils/getDatafromTkon";

// Connect to the database
connectDb();
type PostRequestBody = {
    title: string;
    content: string;
};
  
export async function POST(  request: NextRequest) {
    try {
        // Get userId from the token
        const userId = await getDatafromToken(request);
        if (!userId) {
            return NextResponse.json({ message: 'Invalid Token' }, { status: 401 });
        }

        // Parse the request body
        const reqBody = await request.json();
        const { title, content } : PostRequestBody = reqBody;

        // Validate required fields
        if (!title || !content) {
            return NextResponse.json({ message: 'Please provide all fields' }, { status: 400 });
        }

        // Create a new blog post
        const newPost = new PostBlog({
            title,
            content,
            author: userId
        });

        // Save the post to the database
        await newPost.save();

        // Return success response
        return NextResponse.json({ message: 'Post Created', newPost });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server Error' }, { status: 500 });
    }
}
