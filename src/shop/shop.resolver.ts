import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateShopInput, CreateShopOutput } from './dtos/create-shop.dto';
import { ShopEntity } from './entities/shop.entity';
import { ShopService } from './shop.service';

@Resolver((of) => ShopEntity)
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}
  @Mutation(() => CreateShopOutput)
  createShop(@Args('input') input: CreateShopInput): Promise<CreateShopOutput> {
    return this.shopService.createShop(input);
  }
}
