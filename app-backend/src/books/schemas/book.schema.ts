import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true, index: true })
  title: string;

  @Prop({ index: true })
  author: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

export type Books = Book[];
