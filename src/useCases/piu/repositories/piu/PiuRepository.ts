import { getRepository, Repository } from "typeorm";
import Piu from "../../entities/Piu";
import { CreatePiuDTO, IPiuRepository } from "./IPiuRepository";

class PiuRepository implements IPiuRepository {
    private ormRepository: Repository<Piu>;

    constructor() {
        this.ormRepository = getRepository(Piu)
    }

    public async findById(piuId: string): Promise<Piu | undefined> {
        const piu = await this.ormRepository.findByIds([piuId])
        return piu[0];
    }

    public async create({userId, text}: CreatePiuDTO): Promise<Piu> {
        const piu = this.ormRepository.create({ text, userId});
        await this.ormRepository.save(piu)
        return piu;
    }

    public async list(): Promise<Piu[]> {
        const pius = await this.ormRepository.find({relations: ['user', 'likes']})
        return pius;
    }


    public async delete(piuId: string): Promise<void> {
        await this.ormRepository.delete(piuId);
    }
    
}

export default PiuRepository;