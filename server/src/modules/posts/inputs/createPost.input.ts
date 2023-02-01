import { IsNotEmpty } from 'class-validator';

export class CreatePostInput {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    readonly tagList?: string[];
}
