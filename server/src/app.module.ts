import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { environment, typeOrm } from 'constants/environment';
import { UsersModule } from './modules/users/users.module';
import { BeersModule } from './modules/beers/beers.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserEntity } from './entities/user.entity';
import { BeerEntity } from './entities/beer.entity';
import { RoleEntity } from './entities/role.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ 
            isGlobal: true, 
            envFilePath: 
            environment.envFilePath 
        }),
        // GraphQLModule.forRoot({
        //     autoSchemaFile: 'schema.gql',
        //     sortSchema: true,
        //     playground: true,
        //     driver: ApolloDriver
        // }),
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
                    entities: [__dirname + 'dist/src/entities/*{.ts,.js}', RoleEntity],
                    // entities: [UserEntity, BeerEntity, RoleEntity],
                    migrationsTableName: 'migrations',
                    autoLoadEntities: true,
                    logging: true,
                    synchronize: true
                };
            }
        }),
        UsersModule,
        BeersModule,
        AuthModule
    ]
})
export class AppModule { }
