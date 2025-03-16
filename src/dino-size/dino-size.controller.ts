import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { CreateDinoSizeDto } from './dto/create-dino-size.dto';
import { UpdateDinoSizeDto } from './dto/update-dino-size.dto';
import { DinoSizeService } from './dino-size.service';

@Controller('dino-size')
export class DinoSizeController {
    constructor(private readonly dinoSizeService: DinoSizeService) {}

    // CREAR UN NUEVO TAMAÑO DE DINO
    @Post()
    async create(@Body() createDinoSizeDto: CreateDinoSizeDto) {
        return this.dinoSizeService.create(createDinoSizeDto);
    }

    //OBTENER TODOS LOS TAMAÑOS
    @Get()
    async findAll(){
        return this.dinoSizeService.findAll();
    }

    //OBTENER UN TAMAÑO POR ID
    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.dinoSizeService.findOne(id);
    }

    //EDTIAR UN TAMAÑO
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDinoSizeDto: UpdateDinoSizeDto) {
        return this.dinoSizeService.update(id, updateDinoSizeDto);
    }
}
