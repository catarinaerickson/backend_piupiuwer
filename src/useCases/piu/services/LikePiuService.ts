import { IUserRepository } from "@useCases/user/repositories/user/IUserRepository";
import UserRepository from "@useCases/user/repositories/user/UserRepository";
import { ILikeRepository } from "../repositories/like/ILikeRepository";
import LikeRepository from "../repositories/like/LikeRepository";
import { IPiuRepository } from "../repositories/piu/IPiuRepository";
import PiuRepository from "../repositories/piu/PiuRepository";

interface Request {
    userId: string;
    piuId: string;
}

class LikePiuService {
    private likeRepository: ILikeRepository;
    private piuRepository: IPiuRepository;
    private userRepository: IUserRepository;

    constructor(
        likeRepository: LikeRepository,
        piuRepository: PiuRepository,
        userRepository: UserRepository
    ) {
        this.likeRepository = likeRepository,
        this.piuRepository = piuRepository,
        this.userRepository = userRepository
    }

    public async execute({userId, piuId}: Request): Promise<string> {
        const user = await this.userRepository.findById(userId);
        const piu = await this.piuRepository.findById(piuId);

        if(!user || !piu) {
            throw Error('Invalid Ids')
        }

        const like = await this.likeRepository.like({piuId,userId})
        return like;
    }
}

export default LikePiuService;