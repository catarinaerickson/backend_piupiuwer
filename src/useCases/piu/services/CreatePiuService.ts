import { IUserRepository } from "@useCases/user/repositories/user/IUserRepository";
import UserRepository from "@useCases/user/repositories/user/UserRepository";
import Piu from "../entities/Piu";
import { IPiuRepository } from "../repositories/IPiuRepository";
import PiuRepository from "../repositories/PiuRepository";

interface Request {
    text: string;
    userId: string;
}

class CreatePiuService {
    private piuRepository: IPiuRepository;
    private userRepository: IUserRepository;

    constructor(piuRepository: PiuRepository, userRepository: UserRepository) {
        this.piuRepository = piuRepository;
        this.userRepository = userRepository
    }

    public async execute({text, userId}: Request): Promise<Piu> {
        const user = await this.userRepository.findById(userId);

        if(!user) {
            throw Error('Invalid userId')
        }

        const piu = await this.piuRepository.create({text, userId});
        return piu;
    }
}

export default CreatePiuService;