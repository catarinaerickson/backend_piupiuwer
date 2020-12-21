import Like from "@useCases/piu/entities/Like";
import { getRepository, Repository } from "typeorm";
import { CreateLikeDTO, ILikeRepository } from "./ILikeRepository";

class LikeRepository implements ILikeRepository {
    private ormRepository: Repository<Like>;

    constructor() {
        this.ormRepository = getRepository(Like)
    }


    public async like({userId, piuId}: CreateLikeDTO): Promise<string> {
        const likeExists = await this.ormRepository.findOne({where: {userId, piuId}})

        if (likeExists) {
            await this.ormRepository.delete(likeExists.id)
            return 'Dislike efetuado com sucesso!'
        }

        const like = this.ormRepository.create({userId, piuId})
        await this.ormRepository.save(like)
        return 'Like efeutuado com sucesso!'
    }
    
}

export default LikeRepository;