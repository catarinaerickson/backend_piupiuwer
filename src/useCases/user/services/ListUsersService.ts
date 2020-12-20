import User from "../entities/User";
import { IUserRepository } from "../repositories/user/IUserRepository";
import UserRepository from "../repositories/user/UserRepository";

class ListUsersService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(): Promise<User[]> {
        const users = await this.userRepository.list();
        return users;
    }
}

export default ListUsersService;