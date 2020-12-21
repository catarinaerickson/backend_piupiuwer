import Profile from "../entities/Profile";
import { IProfileRepository } from "../repositories/profile/IProfileRepository";
import  ProfileRepository  from "../repositories/profile/ProfileRepository";
import { IUserRepository } from "../repositories/user/IUserRepository";
import UserRepository from "../repositories/user/UserRepository";

interface Request {
    userId: string,
    first_name: string;
    last_name: string;
    bio: string;
    photo: string;
}

class EditProfileService {
    private profileRepository: IProfileRepository;
    private userRepository: IUserRepository;

    constructor(profileRepository: ProfileRepository, userRepository: UserRepository) {
        this.profileRepository = profileRepository
        this.userRepository = userRepository
    }

    public async execute({userId, first_name, last_name, bio, photo}: Request): Promise<Profile> {
        const user = await this.userRepository.findById(userId)
        if (!user) {
            throw Error('user not found')
        }
        const profileId = user.profileId
        
        if(profileId == null){
            const profile = await this.profileRepository.create({first_name, last_name, bio, photo, user});
            return profile;
        }

        const profile = await this.profileRepository.edit({profileId, first_name, last_name, bio, photo})
        return profile;
    }
}

export default EditProfileService;