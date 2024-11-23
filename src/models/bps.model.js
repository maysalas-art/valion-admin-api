import mongoose from "mongoose";

const bpSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    bp: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BpType',  
        required: true, 
    },
});