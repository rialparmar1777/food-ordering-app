import { model, Schema } from "mongoose";
import Email from "next-auth/providers/email";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        validate: pass => {
            if (!pass?.length || pass.length < 5){
                new Error('Password must be at least 5 characters');
            }
        },
    },
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);