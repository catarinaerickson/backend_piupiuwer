import { hash } from "bcryptjs";
import User from "../entities/User";
import { IUserRepository } from "../repositories/user/IUserRepository";
import UserRepository from "../repositories/user/UserRepository";

interface Request {
    username: string;
    password: string;
    email: string
}

class CreateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository
    }

    public async execute({username, password, email}: Request): Promise<User>{
        const passwordHash = await hash(password, 8)

        const user = await this.userRepository.create({ 
            username, 
            password: passwordHash, 
            email
        })

        return user;
    }
}

export default CreateUserService;