import { Schema, Document } from 'mongoose';

export interface Dino extends Document {
    name: string;
    bp: string;
    specialPrice: number;
    size: Schema.Types.ObjectId;
    claimable: boolean;
    img: string;
}

export const DinoSchema = new Schema({
    name: { type: String, required: true, unique: true },
    bp: { type: String, required: true, unique: true },
    specialPrice: { type: Number, required: false },
    size: { type: Schema.Types.ObjectId, ref: 'DinoSize', required: true },
    claimable: { type: Boolean },
    img: { type: String, required: false }
});