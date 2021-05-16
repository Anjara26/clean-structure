import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { User } from '@interfaces/users.interface';
import { AbstractEntity } from '@entity/abstract.entity';

@Entity()
@Unique(['email'])
export class UserEntity extends AbstractEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
