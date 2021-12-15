import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductPhotosModule } from './product-photos/product-photos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:6qoETv099lmb2FVl@cluster0.7vqmd.mongodb.net/test'),
    ProductsModule,
    ProductPhotosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
