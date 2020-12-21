import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../user/entities/User';
import Like from './Like';

@Entity('pius')
export default class Piu {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column("timestamp")
    created_at: Date;

    @Column()
    userId: string;

    @ManyToOne(() => User, user => user.pius)
    user: User;

    @OneToMany(() => Like, like => like.piu, {eager:true})
    likes: Like[];
}