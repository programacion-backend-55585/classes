import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { ConfigService } from '@nestjs/config';

@Controller('pizzas')
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private config: ConfigService
  ) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @Get()
  findAll() {
    console.log(this.config.get<string>('MY_VAR'))
    return this.pizzasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(+id, updatePizzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id);
  }
}
