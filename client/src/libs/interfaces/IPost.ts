import { Guid } from "guid-typescript";

export interface IPostAbstract {
    id: Guid;
    postId: Guid;
    order: number;
    text: string;
}

export interface IPost {
    id: Guid;
    author: string;
    title: string;
    abstracts: IPostAbstract[];
    createdAt: Date;
    updatedAt: Date;
}
