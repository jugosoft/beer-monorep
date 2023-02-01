import { Injectable } from '@nestjs/common';
import { NestMiddleware } from '@nestjs/common/interfaces/middleware';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UserService } from 'src/modules/users/services/user/user.service';
import { RequestWithUser } from '../intefaces';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly userService: UserService
    ) { }
    async use(req: RequestWithUser, res: Response, next: NextFunction) {
        if (!req.headers.authorization) {
            req.user = null;
            next();
            return;
        }

        const token = req.headers.authorization.replace('Bearer', '').trim();
        try {
            const decoded = verify(token, process.env.AT_SECRET);
            const userId = decoded.sub as unknown as number;
            const user = await this.userService.getOneUser(userId);
            req.user = user;
            next();
        } catch (error) {
            req.user = null;
            next();
        }
    }
}
