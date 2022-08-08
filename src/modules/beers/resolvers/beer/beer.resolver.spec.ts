import { Test, TestingModule } from '@nestjs/testing';
import { BeerResolver } from './beer.resolver';

describe('BeerResolver', () => {
  let resolver: BeerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerResolver],
    }).compile();

    resolver = module.get<BeerResolver>(BeerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
