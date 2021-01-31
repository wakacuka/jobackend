import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopInput, CreateShopOutput } from './dtos/create-shop.dto';
import { ShopEntity } from './entities/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private readonly repoShop: Repository<ShopEntity>,
  ) {}

  async createShop(input: CreateShopInput): Promise<CreateShopOutput> {
    const foundShop = await this.repoShop.findOne({ shopName: input.shopName });
    if (foundShop) {
      return {
        ok: false,
        error: `Can't create shop Already exist.`,
      };
    }
    await this.repoShop.save(input);
    return {
      ok: true,
      error: `미완성`,
    };
  }
}
