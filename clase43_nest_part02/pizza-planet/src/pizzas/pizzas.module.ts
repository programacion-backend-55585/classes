import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, PizzaSchema } from './schema/pizzas.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pizza.name,
        schema: PizzaSchema
      }
    ]),
    ConfigModule
  ],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
