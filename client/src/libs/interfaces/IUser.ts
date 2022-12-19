import { Guid } from "guid-typescript";

export interface IUser {
    id?: Guid;
    email: string;
    name: string;
    password: string;
    hashedRT: string;
    createdAt: Date;
    updatedAt: Date;
}
