import { Module } from '@nestjs/common';
import { ShopEntity } from './entities/shop.entity';
import { ShopResolver } from './shop.resolver';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopResolver, ShopService],
})
export class ShopModule {}
