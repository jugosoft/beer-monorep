import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BeerEntity } from './entities/beer.entity';
import { BeerResolver } from './resolvers/beer/beer.resolver';
import { BeerService } from './services/beer/beer.service';

@Module({
  imports: [TypeOrmModule.forFeature([BeerEntity])],
  providers: [BeerService, BeerResolver],
})
export class BeersModule { }
