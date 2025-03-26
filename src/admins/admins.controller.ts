import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UnauthorizedException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminsService } from './admins.service';
import { error } from 'console';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    // Crear un nuevo administrador
    @Post()
    async create(@Body() createAdminDto: CreateAdminDto) {
        return this.adminsService.create(createAdminDto);
    }

    //LOGIN ADMINS
    @Post('login')
    async login(@Body() updateAdminDto: { username: string, password: string }) {
        const admin = await this.adminsService.validateAdmin(updateAdminDto.username, updateAdminDto.password);
        if(!admin) {
            throw new UnauthorizedException('Credenciales Inválidas');
        }
        return { message: 'Login exitoso', admin };
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
