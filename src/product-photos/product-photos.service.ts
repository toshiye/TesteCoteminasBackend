import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductPhotoDto } from './dto/create-product-photo.dto';
import { UpdateProductPhotoDto } from './dto/update-product-photo.dto';
import {
  productPhoto,
  productPhotoDocument,
} from './entities/product-photo.entity';

@Injectable()
export class ProductPhotosService {

  constructor(
    @InjectModel(productPhoto.name)
    private productPhotoModel: Model<productPhotoDocument>,
  ) {}

  create(createProductPhotoDto: CreateProductPhotoDto) {
    const productPhoto = new this.productPhotoModel(createProductPhotoDto);
    console.log(productPhoto);
    return productPhoto.save();
  }

  findAll() {
    return this.productPhotoModel.find();
  }

  findOne(id: string) {
    return this.productPhotoModel.findById(id);
  }

  update(id: string, updateProductPhotoDto: UpdateProductPhotoDto) {
    return this.productPhotoModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateProductPhotoDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.productPhotoModel.deleteOne({ _id: id }).exec();
  }
}
