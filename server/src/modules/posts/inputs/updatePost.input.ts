import { IsNotEmpty } from 'class-validator';

export class UpdatePostInput {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    readonly tagList?: string[];
}
