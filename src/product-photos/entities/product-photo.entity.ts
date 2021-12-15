import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productPhotoDocument = productPhoto & Document;

@Schema()
export class productPhoto {
  @Prop()
  url: string;

  @Prop()
  product: number;
}

export const productPhotoSchema = SchemaFactory.createForClass(productPhoto);
