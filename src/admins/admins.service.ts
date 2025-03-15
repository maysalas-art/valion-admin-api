import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';


@Injectable()
export class AdminsService {
    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>) {}

    //CREAR UN NUEVO ADMINISTRADOR
    async create(createAdminDto: CreateAdminDto): Promise<Admin> {
        const createdAdmin = new this.adminModel(createAdminDto);
        return createdAdmin.save();
    }

    //OBTENER TODOS LOS ADMINISTRADORES
    async findAll(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }

    //OBTENER UN ADMINISTRADOR POR ID
    async findOne(id: string): Promise<Admin | null> {
        return this.adminModel.findById(id).exec();
    }

    //ACTUALIZAR UN ADMINISTRADOR POR ID
    async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin | null> {
        return this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).exec();
    }

    //ELIMINAR UN ADMINISTRADOR POR ID
    async remove(id: string): Promise<Admin | null> {
        return this.adminModel.findByIdAndDelete(id).exec();
    }

}
