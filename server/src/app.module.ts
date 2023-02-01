import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { BeersModule } from './modules/beers/beers.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppDataSource } from './ormconfig';
import { PostsModule } from './modules/posts/posts.module';
import { AuthMiddleware } from './modules/auth/middlewares';

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
        AuthModule,
        PostsModule
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.ALL
        });
    }
}
