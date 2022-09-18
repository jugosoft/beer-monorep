import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

import { atSecret } from "constants/crypt";
import { JwtPayload } from "../types/jwtPayload.type";

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>(atSecret),
      passReqToCallback: true,
    });
  }

  validate(payload: JwtPayload): JwtPayload {
    return payload;
  }
}
