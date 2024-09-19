import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { IdParam } from '../pipes/idParam';
import { GetBookDto } from './dto/get-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  findAll(@Query(new ValidationPipe()) { author }: GetBookDto) {
    if (author) {
      return this.booksService.findByAuthor(author);
    }
    return this.booksService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param(new ValidationPipe()) { id }: IdParam) {
    try {
      return await this.booksService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param(new ValidationPipe()) { id }: IdParam,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param(new ValidationPipe()) { id }: IdParam) {
    return this.booksService.remove(id);
  }
}
