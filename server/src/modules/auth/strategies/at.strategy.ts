import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtPayload } from "../types/jwtPayload.type";

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_SECRET,
            passReqToCallback: true
        });
    }

    validate(req: Request, payload: JwtPayload): JwtPayload {
        return payload;
    }
}
