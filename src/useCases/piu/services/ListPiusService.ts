import Piu from "../entities/Piu";
import { IPiuRepository } from "../repositories/piu/IPiuRepository";
import PiuRepository from "../repositories/piu/PiuRepository";


class ListPiuService {
    private piuRepository: IPiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public async execute(): Promise<Piu[]> {
        const pius = await this.piuRepository.list()
        return pius;
    }
}

export default ListPiuService;