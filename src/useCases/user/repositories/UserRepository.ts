import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { CreateUserDTO, IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User)
    }

    public async findByUsername(username: string): Promise<User | undefined> {
        const searchedUser = await this.ormRepository.findOne({
            where: {username}
        })

        return searchedUser;

    }

    public async create({username, email, password}: CreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            username,
            password,
            email
        })

        await this.ormRepository.save(user);

        return user;
    }

    
}

export default UserRepository;