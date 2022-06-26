import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly price: number;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavours: string[];
}
