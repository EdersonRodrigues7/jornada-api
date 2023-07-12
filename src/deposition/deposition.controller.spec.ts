import { Test, TestingModule } from '@nestjs/testing';
import { DepositionController } from './deposition.controller';
import { DepositionService } from './deposition.service';

describe('DepositionController', () => {
  let controller: DepositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositionController],
      providers: [DepositionService],
    }).compile();

    controller = module.get<DepositionController>(DepositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
