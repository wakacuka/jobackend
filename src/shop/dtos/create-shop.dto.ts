import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';

import { CoreOutput } from 'src/common/dtos/core-output';
import { ShopEntity } from '../entities/shop.entity';

@InputType()
export class CreateShopInput extends PickType(ShopEntity, ['shopName']) {
  @Field(() => String)
  shopName: string;
}

@ObjectType()
export class CreateShopOutput extends CoreOutput {}
