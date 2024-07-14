import {connectDb} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.models';

connectDb();

export async function POST(request: NextRequest){
    try {
        const response = NextResponse.json({
        message:'User logged out successfully',
        success:true,
        })
        response.cookies.set('token',"",{
            httpOnly:true,
            expires:new Date(0)
        })
        return response;
    } catch (error:any) {
         return NextResponse.json({error:error.message},
                {status:500}
            );
    }
}