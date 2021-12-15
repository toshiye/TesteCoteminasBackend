import { Module } from '@nestjs/common';
import { ProductPhotosService } from './product-photos.service';
import { ProductPhotosController } from './product-photos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  productPhoto,
  productPhotoSchema,
} from './entities/product-photo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: productPhoto.name, schema: productPhotoSchema },
    ]),
  ],
  controllers: [ProductPhotosController],
  providers: [ProductPhotosService],
})
export class ProductPhotosModule {}
