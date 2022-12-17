import { 
    ApiPostsService, 
    MockApiPostsService, 
    ApiUsersService,
    MockApiUsersService 
} from 'src/libs/api';

export const environment = {
    production: false,
    graphql_uri: '/graphql',
    tokenWhiteListedDomains: ['localhost:3001', 'localhost:4200'],
    providers: [{
        provide: ApiPostsService, useClass: MockApiPostsService
    }, {
        provide: ApiUsersService, useClass: MockApiUsersService
    }],
};
