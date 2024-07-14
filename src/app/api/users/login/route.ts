import {connectDb} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
connectDb();
// login controller in next js;
export async function POST(request: NextRequest){
    try {
        // console.log(request)
        const reqBody = await request.json();
        const {email, password} = reqBody;
         const user = await User.findOne({email});
         if(!user){
            return NextResponse.json({
                error:'User does not exist'
            })
         }
         // check password
         const isMatch = await bcryptjs.compare(password,user.password);
          if(!isMatch){
             return NextResponse.json({
                    error:'Invalid Credentials'
             })
          }
        // console.log(user)
        const payload ={
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        }
        const token= jwt.sign(payload , process.env.JWT_SECRET!,{
            expiresIn:360000
        })

        const response= NextResponse.json({
            message:'User logged in successfully',
            success:true,
        })
        response.cookies.set('token',token,{
         httpOnly:true,   
        })
        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500}
        );
    }
}