import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BeerEntity } from 'src/entities/beer.entity';
import { BeerController } from './controllers/beer.controller';
import { BeerResolver } from './resolvers/beer/beer.resolver';
import { BeerService } from './services/beer/beer.service';

@Module({
  imports: [TypeOrmModule.forFeature([BeerEntity])],
  providers: [BeerService, BeerResolver],
  controllers: [BeerController],
})
export class BeersModule { }
