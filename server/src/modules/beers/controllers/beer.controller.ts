import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { BeerEntity } from '../../../entities/beer.entity';
import { CreateBeerInput } from '../inputs/create-beer.input';
import { UpdateBeerInput } from '../inputs/update-beer.input';
import { BeerService } from '../services/beer/beer.service';

@Controller('beers')
export class BeerController {
  constructor(private readonly beerService: BeerService)
  { }

  @Get()
  async getAllBeers(): Promise<BeerEntity[]> {
    return await this.beerService.getAllBeers();
  }

  @Get(':id')
  async getOneBeer(@Param() params): Promise<BeerEntity> {
    return await this.beerService.getOneBeer(params.id);
  }

  @Post()
  async createBeer(@Body() createBeerInput: CreateBeerInput): Promise<BeerEntity> {
    return await this.beerService.createBeer(createBeerInput);
  }

  @Delete(':id')
  async removeOneBeer(@Param() params): Promise<number> {
    return await this.beerService.removeOneBeer(params.id);
  }

  @Put()
  async updateBeer(@Body() updateBeerInput: UpdateBeerInput): Promise<BeerEntity> {
    return await this.beerService.updateBeer(updateBeerInput);
  }
}
