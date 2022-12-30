import {
    ApiPostsService,
    MockApiPostsService,
    ApiUsersService,
    MockApiUsersService,
    ApiBeersService,
    MockApiBeersService
} from 'src/libs/api';

import {
    AuthService,
    MockAuthService
} from 'src/libs/auth';

export const environment = {
    production: false,
    graphql_uri: '/graphql',
    tokenWhiteListedDomains: ['localhost:3001', 'localhost:4200'],
    providers: [{
        provide: ApiPostsService, useClass: MockApiPostsService
    }, {
        provide: ApiUsersService, useClass: MockApiUsersService
    }, {
        provide: ApiBeersService, useClass: MockApiBeersService
    }, {
        provide: AuthService, useClass: MockAuthService
    }],
};
