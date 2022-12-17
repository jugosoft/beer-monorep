export interface IUser {
    id: Guid;
    name: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
