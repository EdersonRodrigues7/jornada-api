import { Test, TestingModule } from '@nestjs/testing';
import { DepositionsService } from './depositions.service';

describe('DepositionsService', () => {
  let service: DepositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositionsService],
    }).compile();

    service = module.get<DepositionsService>(DepositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
