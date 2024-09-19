import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, Books } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = await this.bookModel.create(createBookDto);
    return createdBook;
  }

  async findAll(): Promise<Books> {
    return this.bookModel.find().exec();
  }

  async findOne(id: number): Promise<Book> {
    return this.bookModel.findOne({ _id: id }).exec();
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const updatedBook = await this.bookModel.updateOne(
      { _id: id },
      updateBookDto,
    );
    return updatedBook;
  }

  async remove(id: number) {
    const deletedBook = await this.bookModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedBook;
  }
}
