import ProfileRepository from "@useCases/user/repositories/profile/ProfileRepository";
import UserRepository from "@useCases/user/repositories/user/UserRepository";
import CreateProfileService from "@useCases/user/services/CreateProfileService";
import CreateUserService from "@useCases/user/services/CreateUserService";
import EditProfileService from "@useCases/user/services/EditProfileService";
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

    public async createProfile(req: Request, res: Response): Promise<Response> {
        const {userId, first_name, last_name, bio, photo} = req.body;
        try {
            const userRepository = new UserRepository();
            const profileRepository = new ProfileRepository();
            const createProfile = new CreateProfileService(profileRepository, userRepository)
            const profile = await createProfile.execute({userId, first_name, last_name, bio, photo})
            return res.status(201).json({profile})
             
         } catch (err) {
             return res.status(400).json({error: err.message});
         }
    }

    public async editProfile(req: Request, res: Response): Promise<Response> {
        const {userId, first_name, last_name, bio, photo} = req.body;
        try {
            const userRepository = new UserRepository();
            const profileRepository = new ProfileRepository();
            const editProfile = new EditProfileService(profileRepository, userRepository)
            const profile = await editProfile.execute({userId, first_name, last_name, bio, photo})
            return res.status(201).json({profile})
             
         } catch (err) {
             return res.status(400).json({error: err.message});
         }
    }
}

export default UsersController;