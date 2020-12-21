import { IPiuRepository } from "../repositories/piu/IPiuRepository";
import PiuRepository from "../repositories/piu/PiuRepository";

class DeletePiuService {
    private piuRepository: IPiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public async execute(piuId: string): Promise<void> {
        const piuExists = await this.piuRepository.findById(piuId)
        
        if (!piuExists) {
            throw Error('invalid piuId')
        }
        
        await this.piuRepository.delete(piuId);
    }
}

export default DeletePiuService;