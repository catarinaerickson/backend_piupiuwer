import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}