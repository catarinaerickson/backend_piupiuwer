import UserRepository from "@useCases/user/repositories/UserRepository";
import CreateUserService from "@useCases/user/services/CreateUserService";
import LoginService from "@useCases/user/services/LoginService";
import { Request, Response } from "express";

class UsersController{
    public async create(req: Request, res: Response): Promise<Response> {
        const {username, password, email} = req.body;

        try {
            const userRepository = new UserRepository();
            const createUser = new CreateUserService(userRepository);    
            const user = await createUser.execute({username, password, email});
            return res.status(201).json({
                id: user.id,
                username: user.username,
                email: user.email
            })
        }catch (err) {
            return res.status(400).json({error: err.message})
        }

    }

    public async login(req: Request, res: Response): Promise<Response> {
        const {username, password} = req.body;
        const userRepository = new UserRepository();
            const login = new LoginService(userRepository);    
            const {token, user} = await login.execute({username, password});
            return res.status(201).json({
                token,
                id: user.id,
                username: user.username,
                email: user.email
            })
        
    }
}

export default UsersController;