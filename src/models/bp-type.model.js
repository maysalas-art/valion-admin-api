import mongoose from "mongoose";

const bpTypeSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceForOutlander: {
        type: Number,
        required: true
    }
});

export default mongoose.model('BpType', bpTypeSchema);