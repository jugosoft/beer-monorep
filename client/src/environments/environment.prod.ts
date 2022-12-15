import { ApiPostsService } from "src/libs/api";

export const environment = {
    production: true,
    graphql_uri: '/graphql',
    providers: [{
        provide: ApiPostsService, useClass: ApiPostsService
    }]
};
