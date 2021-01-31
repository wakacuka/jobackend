import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { CoreEntity } from 'src/common/entities/core.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class ShopEntity extends CoreEntity {
  @Field(() => String)
  @Column({ name: 'shop_name' })
  shopName: string;
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: 'CASCADE' })
  owner: UserEntity;
}
