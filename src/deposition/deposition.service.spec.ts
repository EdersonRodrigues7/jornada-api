import { Test, TestingModule } from '@nestjs/testing';
import { DepositionService } from './deposition.service';

describe('DepositionService', () => {
  let service: DepositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositionService],
    }).compile();

    service = module.get<DepositionService>(DepositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
