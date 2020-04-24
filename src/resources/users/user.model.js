import mongoose from 'mongoose'
import { userRouter } from './user.router'
import { stringify } from 'querystring'

/**Creating a schema (data modeling) */
const schema ={
    email : {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password : {
        type: String,
        required: [true, 'Please enter your password'],
        unique: true,
        trim: true,
        minlength: 6
    },
    username:{
        type: String,
        trim: true,
    },
    photoURL: String,
    bio: String,
    url: String,
    isAdmin: Boolean
}

/**Create the model */
const userSchema = new mongoose.Schema(schema, {timestamps: true})

/**Export model  */
export const User = mongoose.model('users',userSchema)