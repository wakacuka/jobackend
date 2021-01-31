import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repoUser: Repository<UserEntity>,
  ) {}

  async createUser({ email }: CreateUserInput): Promise<CreateUserOutput> {
    const foundUser = await this.repoUser.findOne({ email });
    if (foundUser) {
      return {
        ok: false,
        error: `'${email}' already exist.`,
      };
    }
    await this.repoUser.save({ email });
    return {
      ok: true,
      error: `미완성`,
    };
  }

  async updateUser(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const foundUser = await this.repoUser.findOne({ email: input.email });
    if (!foundUser) {
      return {
        ok: false,
        error: `Can't find user`,
      };
    }
    const newInfo: UserEntity = { ...foundUser, ...input };
    await this.repoUser.update(foundUser.id, newInfo);
    return {
      ok: true,
      error: `미완성`,
    };
  }
}
