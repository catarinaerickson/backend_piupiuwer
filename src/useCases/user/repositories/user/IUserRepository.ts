import User from "../../entities/User";

export interface CreateUserDTO{
    username: string;
    email: string;
    password: string
}

export interface IUserRepository {
    create(createUserDTO: CreateUserDTO): Promise<User>,
    findByUsername(username: string): Promise<User | undefined>
    findById(userId: string): Promise<User | undefined>
    list(): Promise<User[]>
}