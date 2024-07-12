import { Test, TestingModule } from '@nestjs/testing';
import { DistintivoService } from '../src/modules/distintivo/distintivo.service';

describe('DistintivoService', () => {
  let service: DistintivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistintivoService],
    }).compile();

    service = module.get<DistintivoService>(DistintivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
