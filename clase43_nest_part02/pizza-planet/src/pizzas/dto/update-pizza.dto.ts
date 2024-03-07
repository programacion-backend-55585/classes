import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from './create-pizza.dto';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {}
