import { Column, Entity } from 'typeorm';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { CoreEntity } from 'src/common/entities/core.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class ShopEntity extends CoreEntity {
  @Field(() => String)
  @Column({ name: 'shop_name' })
  shopName: string;
}
