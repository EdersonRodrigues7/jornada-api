import { Test, TestingModule } from '@nestjs/testing';
import { DepositionsController } from './depositions.controller';
import { DepositionsService } from './depositions.service';

describe('DepositionsController', () => {
  let controller: DepositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositionsController],
      providers: [DepositionsService],
    }).compile();

    controller = module.get<DepositionsController>(DepositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
