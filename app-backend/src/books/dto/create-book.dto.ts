import {
  IsCurrency,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @MinLength(2, {
    message: 'Title is too short',
  })
  @MaxLength(50, {
    message: 'Title is too long',
  })
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsCurrency({ require_symbol: false })
  price: number;

  @IsPositive()
  @IsNumber()
  @IsInt()
  quantity: number;
}
