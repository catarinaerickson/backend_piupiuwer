import PiuRepository from "@useCases/piu/repositories/PiuRepository";
import CreatePiuService from "@useCases/piu/services/CreatePiuService";
import DeletePiuService from "@useCases/piu/services/DeletePiuService";
import ListPiuService from "@useCases/piu/services/ListPiusService";
import UserRepository from "@useCases/user/repositories/user/UserRepository";
import { Request, Response } from "express";

class PiusController {
    public async create(req: Request, res: Response): Promise<Response>{
        const {text, userId} = req.body;

        try {
            const piuRepository = new PiuRepository;
            const userRepository = new UserRepository;
            const createPiu = new CreatePiuService(piuRepository, userRepository);
            const piu = await createPiu.execute({text, userId});
            return res.status(201).json(piu);
        } catch(err) {
            return res.status(400).json({error: err.message})
        }
    }
    
    public async delete(req: Request, res: Response): Promise<Response>{
        const { piuId } = req.params;

        try {
            const piuRepository = new PiuRepository;
            const deletePiu = new DeletePiuService(piuRepository);
            await deletePiu.execute(piuId);
            return res.status(201).send();
        } catch(err) {
            return res.status(400).json({error: err.message})
        }

    }

    public async list(req: Request, res:Response): Promise<Response>{
        try {
            const piuRepository = new PiuRepository;
            const listPius = new ListPiuService(piuRepository);
            const pius = await listPius.execute();
            console.log(pius);
            return res.status(200).json({pius});
        } catch (err) {
            return res.status(400).json({error: err.message})            
        }
    }

}

export default PiusController;