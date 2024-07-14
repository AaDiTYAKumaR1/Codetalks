import mongoose from 'mongoose';

export const connectDb =async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/nextjs')
        const connect= mongoose.connection;
        connect.on('connected',()=>{
            console.log('connected to db');
        })
        connect.on('error',(error:any)=>{
            console.log('error while connecting to db');
            console.log(error.message);
            process.exit(1);
        })

    } catch (error:any) {
        console.log('error while connecting to db')
        console.log(error.message);

    }
}