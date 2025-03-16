import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { CreateDinoQualityDto } from './dto/create-dino-quality.dto';
import { UpdateDinoQualityDto } from './dto/update-dino-quality.dto';
import { DinoQuality } from './schemas/dino-quality.schema';
import { Model } from 'mongoose';

@Injectable()
export class DinoQualityService {
    constructor(@InjectModel('DinoQuality') private readonly dinoQualityModel: Model<DinoQuality>) {}

    //CREAR UN NUEVO QUALITY
    async create(createDinoQualityDto: CreateDinoQualityDto): Promise<DinoQuality> {
        const createDinoQuality = await this.dinoQualityModel.create(createDinoQualityDto);
        return createDinoQuality;
    }

    //OBTENER TODOS LOS DINOS
    async findAll(): Promise<DinoQuality[]> {
        return this.dinoQualityModel.find().exec();
    }

    //OBTENER UN TIPO POR ID
    async findOne(id: string): Promise<DinoQuality | null> {
        return this.dinoQualityModel.findById(id).exec();
    }

    //ACTUALIZAR UN TIPO POR ID
    async update(id: string, updateDinoQualityDto: UpdateDinoQualityDto): Promise<DinoQuality | null> {
        return this.dinoQualityModel.findByIdAndUpdate(id, updateDinoQualityDto, {
            new: true
        }).exec();
    }
}
