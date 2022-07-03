import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { environment, typeOrm } from 'constants/environment';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: environment.envFilePath }),
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
          entities: [typeOrm.entities],
          synchronize: true,
          autoLoadEntities: true,
          logging: true,
        };
      },
    }),
  ],
})
export class AppModule { }
