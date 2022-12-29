import { Guid } from "guid-typescript";

export interface IUser {
    id: Guid;
    name: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
