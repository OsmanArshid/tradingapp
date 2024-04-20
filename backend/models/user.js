// gonna define schema for users

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    passowrd: String

});


export const User = mongoose.model("User", userSchema);