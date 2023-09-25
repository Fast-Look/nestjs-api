import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gender, GenderSchema } from './schemas/gender.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gender.name, schema: GenderSchema }]),
  ],
  controllers: [GendersController],
  providers: [GendersService],
})
export class GendersModule {}
