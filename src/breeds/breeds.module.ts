import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Breed } from "./entities/breed.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  controllers: [BreedsController],
  providers: [BreedsService],
  exports: [TypeOrmModule]  // Se exporta para que se pueda utilizar en otro módulo
})
export class BreedsModule {}
