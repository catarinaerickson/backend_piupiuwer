import Profile from "@useCases/user/entities/Profile";
import User from "@useCases/user/entities/User";

export interface EditProfileDTO {
    profileId: string;
    first_name: string;
    last_name: string;
    bio: string;
    photo: string;
}

export interface CreateProfileDTO {
    first_name: string;
    last_name: string;
    bio: string;
    photo: string;
    user: User;
}

export interface IProfileRepository {
    edit(editProfileDTO: EditProfileDTO): Promise<Profile>;
    create(createProfileDTO: CreateProfileDTO): Promise<Profile>
}