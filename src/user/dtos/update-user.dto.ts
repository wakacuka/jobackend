import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

import { CoreOutput } from 'src/common/dtos/core-output';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  email?: string;
}

@ObjectType()
export class UpdateUserOutput extends CoreOutput {}
