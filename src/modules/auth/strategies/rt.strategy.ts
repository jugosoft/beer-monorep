import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express';
import { space } from "constants/util";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { rtSecret } from "constants/crypt";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>(rtSecret),
    });
  }

  validate(req: Request, payload: any) {
    const refreshToken = req.get('Authorization').replace('Bearer', space).trim();
    return {
      ...payload,
      refreshToken,
    };
  }
}
