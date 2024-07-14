import {connectDb} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {getDatafromToken} from '@/utils/getDatafromTkon';
connectDb();

export async function POST(request:NextRequest){
    try {
         const id= await getDatafromToken(request);
         if(!id){
            return NextResponse.json({
                error:'Unauthorized'
            })
         }
         const user = await User.findOne({_id:id});
        return NextResponse.json({
            message:'User fetched',
            data:user
        });
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}