import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BeerEntity } from '../../entities/beer.entity';
import { CreateBeerInput } from '../../inputs/create-beer.input';
import { UpdateBeerInput } from '../../inputs/update-beer.input';
import { BeerService } from '../../services/beer/beer.service';

@Resolver('beer')
export class BeerResolver {
  constructor(
    private readonly beerService: BeerService,
  ) { }

  @Mutation(() => BeerEntity)
  async createBeer(@Args('createBeer') createBeerInput: CreateBeerInput): Promise<BeerEntity> {
    return await this.beerService.createBeer(createBeerInput);
  }

  @Mutation(() => BeerEntity)
  async updateBeer(@Args('updateBeer') updateBeerInput: UpdateBeerInput): Promise<BeerEntity> {
    return await this.beerService.updateBeer(updateBeerInput);
  }

  @Mutation(() => Number)
  async removeBeer(@Args('removeBeer') id: number): Promise<number> {
    return await this.beerService.removeOneBeer(id);
  }

  @Query(() => BeerEntity)
  async getOneBeer(@Args('id') id: number): Promise<BeerEntity> {
    return await this.beerService.getOneBeer(id);
  }

  @Query(() => [BeerEntity])
  async getAllBeers(): Promise<BeerEntity[]> {
    return await this.beerService.getAllBeers();
  }
}
