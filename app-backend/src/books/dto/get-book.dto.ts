import { PickType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class GetBookDto extends PickType(CreateBookDto, ['author'] as const) {}
