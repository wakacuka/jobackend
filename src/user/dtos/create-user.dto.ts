import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';

import { CoreOutput } from 'src/common/dtos/core-output';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(UserEntity, ['email']) {
  @Field(() => String)
  email: string;
}

@ObjectType()
export class CreateUserOutput extends CoreOutput {}
