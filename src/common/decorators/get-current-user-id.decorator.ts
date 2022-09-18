import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "src/modules/auth/types/jwtPayload.type";

export const GetCurrentUserId = createParamDecorator(
  (_: string | undefined | null, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  }
);
