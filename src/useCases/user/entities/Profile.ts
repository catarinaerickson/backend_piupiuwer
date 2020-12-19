import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('profile')
export default class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    bio: string;

    @Column()
    photo: string;

    @OneToOne(() => User, user => user.profile) 
    user: User;
}