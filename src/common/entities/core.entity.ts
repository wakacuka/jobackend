import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;
  @Field(() => Date)
  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_dt',
  })
  createdAt: Date;
  @Field(() => Date)
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_dt',
  })
  updatedAt: Date;
}
