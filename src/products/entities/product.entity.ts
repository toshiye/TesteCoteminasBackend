import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = product & Document;

@Schema()
export class product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const productSchema = SchemaFactory.createForClass(product);
