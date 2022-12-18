import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { IUser } from 'src/libs/interfaces';


export interface IUserService {
    getUsers(): Observable<IUser[]>;
    getUserById(userId: Guid): Observable<IUser>;
    getUserByName(username: string): Observable<IUser>;
    getUserByEmail(email: string): Observable<IUser>;
    addUser(newUser: IUser): Observable<IUser>;
    updateUser(userToUpdate: IUser): Observable<IUser>;
    deleteUser(userId: Guid): Observable<number | undefined>;
}
