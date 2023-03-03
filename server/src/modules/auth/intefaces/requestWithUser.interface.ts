import { Request } from 'express';

import { UserEntity } from 'src/entities';


export interface RequestWithUser extends Request {
    currentUser: UserEntity;
}