import { Test, TestingModule } from '@nestjs/testing';
import { DistintivoController } from '../src/modules/distintivo/distintivo.controller';

describe('DistintivoController', () => {
  let controller: DistintivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistintivoController],
    }).compile();

    controller = module.get<DistintivoController>(DistintivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
