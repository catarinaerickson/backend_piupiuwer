import Profile from "@useCases/user/entities/Profile";
import { getRepository, Repository } from "typeorm";
import { CreateProfileDTO, EditProfileDTO, IProfileRepository } from "./IProfileRepository";

class ProfileRepository implements IProfileRepository{
    private ormRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(Profile)
    }
    
    public async create({first_name, last_name, bio, photo, user}: CreateProfileDTO): Promise<Profile> {
        const profile = this.ormRepository.create({first_name, last_name, bio, photo, user});
        await this.ormRepository.save(profile);
        return profile;
    }

    public async edit({profileId, first_name, last_name, bio, photo}: EditProfileDTO): Promise<Profile> {
        const profile = await this.ormRepository.update(profileId, {first_name, last_name, bio, photo})        
        return profile.raw[1];
    }       

    
    
}

export default ProfileRepository;