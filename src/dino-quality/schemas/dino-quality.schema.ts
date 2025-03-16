import { Schema } from 'mongoose';

export interface DinoQuality extends Document {
    type: string;
    stat: string;
    chico: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    },
    mediano: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    },
    grande: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    },
};

export const DinoQualitySchema = new Schema({
    type: { type: String, required: true },
    stat: { type: String, required: true },
    chico: {
        individualPrice: { type: Number, required: true },
        couplePrice: { type: Number, required: true},
        usdIndividualPrice: { type: Number, required: true },
        usdCouplePrice: { type: Number, required: true }
    },
    mediano: {
        individualPrice: { type: Number, required: true },
        couplePrice: { type: Number, required: true},
        usdIndividualPrice: { type: Number, required: true },
        usdCouplePrice: { type: Number, required: true }
    },
    grande: {
        individualPrice: { type: Number, required: true },
        couplePrice: { type: Number, required: true},
        usdIndividualPrice: { type: Number, required: true },
        usdCouplePrice: { type: Number, required: true }
    }
});