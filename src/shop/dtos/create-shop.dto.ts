import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';

import { CoreOutput } from 'src/common/dtos/core-output';
import { ShopEntity } from 'src/shop/entities/shop.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@InputType()
export class CreateShopInput extends PickType(ShopEntity, [
  'shopName',
  'owner', //-
]) {
  @Field(() => String)
  shopName: string;
  @Field(() => UserEntity) //-
  owner: UserEntity; //-
}

@ObjectType()
export class CreateShopOutput extends CoreOutput {}
