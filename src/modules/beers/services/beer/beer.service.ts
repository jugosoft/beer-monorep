import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BeerEntity } from '../../entities/beer.entity';
import { CreateBeerInput } from '../../../beers/inputs/create-beer.input';
import { UpdateBeerInput } from '../../inputs/update-beer.input';

@Injectable()
export class BeerService {
  constructor(
    @InjectRepository(BeerEntity)
    private readonly beerRepository: Repository<BeerEntity>,
  ) { }

  async createBeer(createUserInput: CreateBeerInput): Promise<BeerEntity> {
    return await this.beerRepository.save({ ...createUserInput });
  }

  async getOneBeer(id: number): Promise<BeerEntity> | null {
    return await this.beerRepository.findOne({ where: { id: id } });
  }

  async getAllBeers(): Promise<BeerEntity[]> {
    return await this.beerRepository.find();
  }

  async removeOneBeer(id: number): Promise<number> | null {
    const deleteResult = await this.beerRepository.delete({ id });
    if (deleteResult.affected !== 0) {
      return id;
    }
    return null;
  }

  async updateBeer(updateBeerInput: UpdateBeerInput): Promise<BeerEntity> {
    await this.beerRepository.update({ id: updateBeerInput.id }, { ...updateBeerInput });
    return await this.getOneBeer(updateBeerInput.id);
  }
}
