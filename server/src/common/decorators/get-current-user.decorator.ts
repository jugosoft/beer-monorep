import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadWithRt } from 'src/modules/auth/types';

export const GetCurrentUser = createParamDecorator(
    (data: keyof JwtPayloadWithRt | undefined, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const user = request.user as JwtPayloadWithRt;

        if (!data) {
            return request.user;
        }
        
        return request.user[data];
    },
);