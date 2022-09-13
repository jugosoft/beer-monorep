import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { environment, typeOrm } from 'constants/environment';
import { UsersModule } from './modules/users/users.module';
import { BeersModule } from './modules/beers/beers.module';
import { AuthModule } from './modules/auth/auth.module';
import { Migrate20220913 } from 'db/migrations/Migrate20220913';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: environment.envFilePath }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        return {
          type: config.get<'aurora-data-api'>(typeOrm.connection) as any,
          host: config.get<string>(typeOrm.host),
          username: config.get<string>(typeOrm.username),
          password: config.get<string>(typeOrm.password),
          database: config.get<string>(typeOrm.database),
          port: config.get<number>(typeOrm.port),
          entities: [typeOrm.entities_mask],
          migrationsTableName: "migrations",
          migrations: [Migrate20220913],
          autoLoadEntities: true,
          logging: true,
          synchronize: true,
        };
      },
    }),
    UsersModule,
    BeersModule,
    AuthModule,
  ],
})
export class AppModule { }
