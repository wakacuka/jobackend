import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user.dto';

import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  hello(): String {
    return 'hello world agian!!!';
  }

  @Mutation(() => CreateUserOutput)
  createUser(@Args('input') input: CreateUserInput): Promise<CreateUserOutput> {
    return this.userService.createUser(input);
  }

  @Mutation(() => UpdateUserOutput)
  updateUser(@Args('input') input: UpdateUserInput): Promise<UpdateUserOutput> {
    return this.userService.updateUser(input);
  }
}
