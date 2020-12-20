import Piu from "../entities/Piu";

export interface CreatePiuDTO {
    userId: string;
    text: string;
}

export interface IPiuRepository {
    create(createPiuDTO: CreatePiuDTO): Promise<Piu>;
    delete(piuId: string): Promise<void>;
    findById(piuId: string): Promise<Piu | undefined>;
    list(): Promise<Piu[]>;
}