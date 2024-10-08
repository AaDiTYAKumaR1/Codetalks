import {connectDb} from '@/dbConfig/dbConfig';
import { NextRequest,NextResponse } from 'next/server';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import {sendMail } from '@/utils/mailer';
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        // console.log(reqBody);
        const   user = await User.findOne({email});
       if(user){
           return NextResponse.json({error:'User already exists'},
           {status:400}
           );
        }
         const salt = await bcryptjs.genSalt(10);
         const hasheddPassword = await bcryptjs.hash(password,salt);
            const newUser = new User({
                username,
                email,
                password:hasheddPassword
            });
            
             const savedUser = await newUser.save();
             console.log(savedUser);
             // sendemail verification
               await sendMail({email, emailType: "VERIFY", userId: newUser._id});
               
                return NextResponse.json({message:'User created successfully',
                    status:201,
                });
    } catch (error:any) {
        return NextResponse.json({error:error.message},
        {status:500}
        );
    }
}