import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
