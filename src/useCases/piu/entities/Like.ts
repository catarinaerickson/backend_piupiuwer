import User from "@useCases/user/entities/User";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Piu from "./Piu";

@Entity('likes')
export default class Like{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("timestamp")
    created_at: Date;

    @Column()
    userId: string;

    @Column()
    piuId: string;

    @ManyToOne(() => Piu, piu => piu.likes)
    piu: Piu;

    @ManyToOne(() => User, user => user.likes, {eager: true})
    user: User;
}