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

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById({ _id: id }).exec();
    if (!book) {
      throw new Error(`No Results for ${id}`);
    }
    return book;
  }

  async findByAuthor(author: string): Promise<Books> {
    return this.bookModel
      .aggregate([
        {
          $match: {
            author: {
              $regex: author,
              $options: 'i',
            },
          },
        },
      ])
      .exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const updatedBook = await this.bookModel.findOneAndUpdate(
      { _id: id },
      updateBookDto,
      { returnNewDocument: true, returnDocument: 'after' },
    );
    if (!updatedBook) {
      throw new Error(`No Books to update with id ${id}`);
    }
    return updatedBook;
  }

  async remove(id: string) {
    const deletedBook = await this.bookModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedBook;
  }
}
