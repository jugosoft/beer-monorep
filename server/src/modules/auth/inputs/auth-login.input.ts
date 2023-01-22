import { IsNotEmpty } from 'class-validator';

export class AuthLoginInput {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;
}
