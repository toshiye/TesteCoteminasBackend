import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { product, productDocument } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(product.name) private productModel: Model<productDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    console.log(product);
    return product.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(
      { _id: id },
      { $set: UpdateProductDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.productModel.deleteOne({ _id: id }).exec();
  }
}
