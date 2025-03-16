import { Schema } from 'mongoose';

export interface DinoSize extends Document {
    size: string;
    label: string;
}

export const DinoSizeSchema = new Schema({
    size: { type: String, required: true },
    label: { type: String, required: true }
});
