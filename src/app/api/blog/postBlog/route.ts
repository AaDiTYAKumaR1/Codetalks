import { connectDb } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import PostBlog from '@/models/post.models';
import { NextRequest,NextResponse } from "next/server";
import { getDatafromToken } from "@/utils/getDatafromTkon";

connectDb();
interface PostRequestBody{
    title:string;
    content:string;
    imageUrl?:string;
}

export async function Post(request: NextRequest){
    try {
        const userId=await getDatafromToken(request);
        if(!userId){
            return NextResponse.json({message:'Invalid Token'},
            {status:401}
            );
        }
        const reqBody = await request.json();
        const {title,content}:PostRequestBody=reqBody;
        if(!title || !content){
            return NextResponse.json(new Error('Please provide all fields'));
        }
        const newPost=new Post({
            title,
            content,
            author:userId
        });
        await newPost.save();
        return NextResponse.json({message:'Post Created',newPost});
    } catch (error) {
        return NextResponse.json(new Error('Server Error'));
    }
}