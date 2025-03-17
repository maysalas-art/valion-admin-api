import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dino } from './schemas/dino.schema';
import { CreateDinoDto } from './dto/create-dino.dto';
import { UpdateDinoDto } from './dto/update-dino.dto';

@Injectable()
export class DinoService {
    constructor(@InjectModel('Dino') private readonly dinoModel: Model<Dino>) {}

    //AGREGAR UN NUEVO DINO
    async create(createDinoDto: CreateDinoDto): Promise<Dino> {
        const createDino = await this.dinoModel.create(createDinoDto);
        return createDino.save();
    }

    //OBTENER TODOS LOS DINOS
    async findAll(): Promise<Dino[]> {
        return this.dinoModel.find().exec();
    }

    //OBTENER POR ID
    async findOne(id: string): Promise<Dino | null> {
        return this.dinoModel.findById(id).exec();
    }

    //OBTENER POR NOMBRE
    async findByName(name: string): Promise<Dino | null> {
        if (!name) {
          throw new Error('El nombre no puede estar vacío');
        }
        try {
          return await this.dinoModel.findOne({
            name: { $regex: new RegExp(name, 'i') }
          }).populate('quality').exec(); // Incluye los detalles de DinoQuality
        } catch (error) {
          throw new Error('Error al buscar por nombre: ' + error.message);
        }
      }

    //OBTENER DINOS POR TAMAÑO
    async findAllBySize(size: string): Promise<Dino[] | null> {
        return this.dinoModel.find({
            id: size
        }).exec();
    }

    //ACTUALIZAR UN DINO
    async update(id: string, updateDinoDto: UpdateDinoDto): Promise<Dino | null> {
        return this.dinoModel.findByIdAndUpdate(id, updateDinoDto, {
            new: true
        }).exec();
    }
}
