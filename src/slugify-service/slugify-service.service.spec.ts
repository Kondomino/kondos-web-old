import { Test, TestingModule } from '@nestjs/testing';
import { SlugifyServiceService } from './slugify-service.service';

describe('SlugifyServiceService', () => {
  let service: SlugifyServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugifyServiceService],
    }).compile();

    service = module.get<SlugifyServiceService>(SlugifyServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
