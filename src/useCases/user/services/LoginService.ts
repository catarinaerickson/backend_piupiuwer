import { compare } from "bcryptjs";
import AuthError from "errors/AuthError";
import { sign } from "jsonwebtoken";
import User from "../entities/User";
import { IUserRepository } from "../repositories/user/IUserRepository";
import UserRepository from "../repositories/user/UserRepository";

interface Request {
    username: string,
    password: string
}

interface Response {
    token: string,
    user: User
}

class LoginService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({username, password}: Request): Promise<Response>{
        const userExists = await this.userRepository.findByUsername(username);

        if (!userExists) {
            throw new AuthError('Credenciais inválidas', 401);
        }
        
        const passwordMatches = await compare(password, userExists.password);
        
        if (!passwordMatches) {
            throw new AuthError('Credenciais inválidas', 401);
        }

        const token = sign({id: userExists.id}, process.env.APP_SECRET as string, {
            expiresIn: '1d',
        })

        return {token, user: userExists}
    }
}

export default LoginService;