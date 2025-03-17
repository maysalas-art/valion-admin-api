import { DinoService } from './dino.service';
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { CreateDinoDto } from './dto/create-dino.dto';
import { UpdateDinoDto } from './dto/update-dino.dto';

@Controller('dino')
export class DinoController {
    constructor(private readonly dinoService: DinoService) {}

    //AGREGAR UN NUEVO DINO
    @Post()
    async create(@Body() createDinoDto: CreateDinoDto) {
        return this.dinoService.create(createDinoDto);
    }

    //OBTENER TODOS LOS DINOS
    @Get()
    async findAll(){
        return this.dinoService.findAll();
    }

    //OBTENER UN DINO POR ID
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.dinoService.findOne(id);
    }

    //OBTENER POR NOMBRE
    @Get(':name')
    async findByName(@Param('name') name: string) {
        return this.dinoService.findByName(name);
    }

    //OBTENER TODOS POR TAMAÑO
    @Get(':size')
    async findAllBySize(@Param('size') size: string) {
        return this.dinoService.findAllBySize(size);
    }

    //ACTUALIZAR UN DINO
    @Put(':id')
    async update(@Param('id') id: string, updateDinoDto: UpdateDinoDto) {
        return this.dinoService.update(id, updateDinoDto);
    }
}
