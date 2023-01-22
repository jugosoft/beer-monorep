import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { BeersModule } from './modules/beers/beers.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppDataSource } from './ormconfig';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        // GraphQLModule.forRoot({
        //     autoSchemaFile: 'schema.gql',
        //     sortSchema: true,
        //     playground: true,
        //     driver: ApolloDriver
        // }),
        TypeOrmModule.forRoot(AppDataSource.options),
        UsersModule,
        BeersModule,
        AuthModule
    ]
})
export class AppModule { }
