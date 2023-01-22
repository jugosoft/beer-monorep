import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { RoleEntity } from 'src/entities';


const configService = new ConfigService();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get('TYPEORM_HOST'),
    port: configService.get('TYPEORM_PORT') as number,
    username: configService.get('TYPEORM_USERNAME'),
    password: configService.get('TYPEORM_PASSWORD') || '123456',
    database: configService.get('TYPEORM_DATABASE'),
    entities: [__dirname + '/**/entities/*{.ts,.js}', RoleEntity],
    logging: true,
    synchronize: true,
    migrationsRun: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'history'
});
