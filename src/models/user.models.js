import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const UserSchema= new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please provide a username'],
        unique: true
    },
    email:{
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
    },
    description:{
        type: String,
        default: 'Hey there! I love to explore new things.'
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
    },
    followers:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        default:[],
    },
    following:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        default:[],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        dafault:false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});
const User = mongoose.models.User ||  mongoose.model('User',UserSchema);

UserSchema.methods.matchPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
UserSchema.methods.accessToken=async function(){
    return await jwt.sign(
        {
            id:this._id,
            username:this.username,
            email : this.email,
        }
    )
}
export default User;