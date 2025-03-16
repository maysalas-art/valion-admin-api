import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DinoSize } from './schemas/dino-size.schema';
import { CreateDinoSizeDto } from './dto/create-dino-size.dto';
import { UpdateDinoSizeDto } from './dto/update-dino-size.dto';

@Injectable()
export class DinoSizeService {
    constructor(@InjectModel('DinoSize') private readonly dinoSizeModel: Model<DinoSize>) {}

    //CREAR UN NUEVO TAMAÑO
    async create(createDinoSizeDto: CreateDinoSizeDto): Promise<DinoSize> {
        const CreateDinoSize = await this.dinoSizeModel.create(createDinoSizeDto);
        return CreateDinoSize.save();
    }

    //OBTENER TODOS LOS TAMAÑOS
    async findAll(): Promise<DinoSize[]> {
        return this.dinoSizeModel.find().exec();
    }

    //OBTENER UN TIPO POR ID
    async findOne(id: string): Promise<DinoSize | null> {
        return this.dinoSizeModel.findById(id).exec();
    }

    //EDITAR UN TIPO POR ID
    async update(id: string, updateDinoSizeDto: UpdateDinoSizeDto): Promise<DinoSize | null> {
        return this.dinoSizeModel.findByIdAndUpdate(id, updateDinoSizeDto, {
            new: true
        }).exec();
    }
}
