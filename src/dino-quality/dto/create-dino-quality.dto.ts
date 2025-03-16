export class CreateDinoQualityDto {
    readonly type: string;
    readonly stat: string;
    readonly chico: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    };
    readonly mediano: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    };
    readonly grande: {
        individualPrice: number;
        couplePrice: number;
        usdIndividualPrice: number;
        usdCouplePrice: number;
    };
}