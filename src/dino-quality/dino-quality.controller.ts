import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { DinoQualityService } from './dino-quality.service';
import { CreateDinoQualityDto } from './dto/create-dino-quality.dto';
import { UpdateDinoQualityDto } from './dto/update-dino-quality.dto';

@Controller('dino-quality')
export class DinoQualityController {
    constructor(private readonly dinoQualityService: DinoQualityService) {}

    @Post()
    async create(@Body() createDinoQualityDto: CreateDinoQualityDto) {
        return this.dinoQualityService.create(createDinoQualityDto);
    }

    //OBTENER TODOS LOS TIPOS
    @Get()
    async findAll() {
        return this.dinoQualityService.findAll();
    }

    //OBTENER UN TIPO POR ID
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.dinoQualityService.findOne(id);
    }

    //ACTUALIZAR UN TIPO
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDinoQualityDto: UpdateDinoQualityDto) {
        return this.dinoQualityService.update(id, updateDinoQualityDto);
    }

    //ELIMINAR UN TIPO
    

}
