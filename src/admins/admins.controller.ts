import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    // Crear un nuevo administrador
    @Post()
    async create(@Body() createAdminDto: CreateAdminDto) {
        return this.adminsService.create(createAdminDto);
    }

    // Obtener todos los administradores
    @Get()
    async findAll() {
        return this.adminsService.findAll();
    }

    // Obtener un administrador por ID
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.adminsService.findOne(id);
    }

    // Actualizar un administrador por ID
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
        return this.adminsService.update(id, updateAdminDto);
    }

    // Eliminar un administrador por ID
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.adminsService.remove(id);
    }

}
