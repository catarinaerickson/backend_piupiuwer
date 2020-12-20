import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../user/entities/User';

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
}