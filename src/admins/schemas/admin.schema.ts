import { Schema } from 'mongoose';

export interface Admin extends Document {
    name: string;
    username: string;
    eos: string;
    password: string;
}

export const AdminSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  eos: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});