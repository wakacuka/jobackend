import { Column, Entity } from 'typeorm';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { CoreEntity } from 'src/common/entities/core.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class UserEntity extends CoreEntity {
  @Field(() => String)
  @Column()
  email: string;
  // @Field(() => String)
  // @Column({ name: 'nick_name', default: 'nickname' })
  // nickName: string;
}
