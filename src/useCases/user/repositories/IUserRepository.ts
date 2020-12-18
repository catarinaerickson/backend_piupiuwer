import User from "../entities/User";

export interface CreateUserDTO{
    username: string;
    email: string;
    password: string
}

export interface IUserRepository {
    create(createuserDTO: CreateUserDTO): Promise<User>,
    findByUsername(username: string): Promise<User | undefined>
}