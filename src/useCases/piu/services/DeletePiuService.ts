import { IPiuRepository } from "../repositories/IPiuRepository";
import PiuRepository from "../repositories/PiuRepository";

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