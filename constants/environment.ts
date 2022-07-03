export const environment = {
    port: 'API_PORT',
    host: 'API_HOST',
    envFilePath: '.env',
};

export const typeOrm = {
    connection: 'TYPEORM_CONNECTION',
    host: 'TYPEORM_HOST',
    username: 'TYPEORM_USERNAME',
    password: 'TYPEORM_PASSWORD',
    database: 'TYPEORM_DATABASE',
    port: 'TYPEORM_PORT',
    entities: __dirname + 'dist/**/*.entity{.ts,.js}',

}
