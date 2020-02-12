import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class user {

    @PrimaryColumn()
    username: string;

    @Column()
    password:string;

    @Column()
    fullname:string;

    @Column() 
    dateofbirth:Date;

    @Column()
    gender:string;

    @Column()
    email:string;

    @Column() 
    issuspended:boolean;

    @Column() 
    participantflag:boolean;

    @Column()
    university:string;

    @Column() 
    ownerflag:boolean;

    @Column()
    organization:string;

    @Column()
    nationalid:string;
}