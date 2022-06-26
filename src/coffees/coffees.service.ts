import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Akshay',
      price: 2.5,
      brand: 'Starbucks',
      flavours: ['vanilla', 'caramel'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee) {
      throw new NotFoundException('Coffee #${id} not found');
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffees = this.findOne(id);
    if (existingCoffees) {
    }
  }
}
