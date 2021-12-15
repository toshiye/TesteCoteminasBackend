import { Test, TestingModule } from '@nestjs/testing';
import { ProductPhotosController } from './product-photos.controller';
import { ProductPhotosService } from './product-photos.service';

describe('ProductPhotosController', () => {
  let controller: ProductPhotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPhotosController],
      providers: [ProductPhotosService],
    }).compile();

    controller = module.get<ProductPhotosController>(ProductPhotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
