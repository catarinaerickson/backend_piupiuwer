import Piu from '../../piu/entities/Piu';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Profile from './Profile';
import Like from '@useCases/piu/entities/Like';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({unique: true})
    email: string;

    @Column()
    profileId: string;

    @OneToOne(() => Profile, profile => profile.user,{eager: true})
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Piu, piu => piu.user)
    pius: Piu[];

    @OneToMany(() => Like, like => like.user)
    likes: Like[];
}