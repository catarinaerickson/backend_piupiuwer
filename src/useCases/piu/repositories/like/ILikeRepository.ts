import Like from "@useCases/piu/entities/Like";

export interface CreateLikeDTO {
    piuId: string,
    userId: string
}

export interface ILikeRepository {
    like(createLikeDTO: CreateLikeDTO): Promise<string>;
}