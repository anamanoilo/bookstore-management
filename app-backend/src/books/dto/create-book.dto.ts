import {
  IsCurrency,
  IsInt,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @MinLength(1, {
    message: 'Title is too short',
  })
  @MaxLength(200, {
    message: 'Title is too long',
  })
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsCurrency({ require_symbol: false })
  price: number;

  @Min(0)
  @IsNumber()
  @IsInt()
  quantity: number;
}
