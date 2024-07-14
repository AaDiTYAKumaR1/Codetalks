
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function getDatafromToken(req:NextRequest){
    try {
        const token = req.cookies.get('token')?.value || '';
        if(!token){
           return null;
        }
        const decoded:any=jwt.verify(token,process.env.JWT_SECRET!);
        // console.log(decoded.user.id);
        return decoded.user.id;
    } catch (error) {
        throw new Error('Invalid Token');
    }
}