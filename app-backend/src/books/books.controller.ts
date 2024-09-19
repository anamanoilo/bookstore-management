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
  findAll() {
    return this.booksService.findAll();
  }

  @Get('/filters')
  @UsePipes(ValidationPipe)
  findAllOrFilterByAuthor(
    @Query(new ValidationPipe())
    { author }: GetBookDto,
  ) {
    return this.booksService.findByAuthor(author);
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
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param()
    { id }: IdParam,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    try {
      return await this.booksService.update(id, updateBookDto);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param(new ValidationPipe()) { id }: IdParam) {
    return this.booksService.remove(id);
  }
}
