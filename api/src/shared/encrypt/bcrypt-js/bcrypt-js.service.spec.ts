import { Test, TestingModule } from '@nestjs/testing';
import { BcryptJsService } from './bcrypt-js.service';

describe('BcryptJsService', () => {
  let service: BcryptJsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptJsService],
    }).compile();

    service = module.get<BcryptJsService>(BcryptJsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
