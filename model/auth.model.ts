import {model,Schema} from "mongoose";
import mongoose from "mongoose";

interface iUser {
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    otp: string;
}

interface iUserData extends iUser, Document{}

const authModel = new Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlenght:20

    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true

    },
    isVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
        default:""
    }
},{timestamps:true})

export default model<iUserData>("users", authModel);

export const user = model("user, authModel")