import Piu from "../entities/Piu";
import { IPiuRepository } from "../repositories/IPiuRepository";
import PiuRepository from "../repositories/PiuRepository";


class ListPiuService {
    private piuRepository: IPiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public async execute(): Promise<Piu[]> {
        const pius = await this.piuRepository.list()
        console.log(pius)
        return pius;
    }
}

export default ListPiuService;