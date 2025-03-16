export class CreateDinoDto {
    readonly name: string;
    readonly bp: string;
    readonly specialPrice: number;
    readonly size: string; //ObjectID
    readonly claimable: boolean;
    readonly img: string;
}