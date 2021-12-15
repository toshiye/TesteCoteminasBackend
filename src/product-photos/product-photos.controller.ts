import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPhotosService } from './product-photos.service';
import { CreateProductPhotoDto } from './dto/create-product-photo.dto';
import { UpdateProductPhotoDto } from './dto/update-product-photo.dto';

@Controller('product-photos')
export class ProductPhotosController {
  constructor(private readonly productPhotosService: ProductPhotosService) {}

  @Post()
  create(@Body() createProductPhotoDto: CreateProductPhotoDto) {
    return this.productPhotosService.create(createProductPhotoDto);
  }

  @Get()
  findAll() {
    return this.productPhotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPhotosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPhotoDto: UpdateProductPhotoDto,
  ) {
    return this.productPhotosService.update(id, updateProductPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPhotosService.remove(id);
  }
}
