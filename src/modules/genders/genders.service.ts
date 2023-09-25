import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gender } from './schemas/gender.schema';

@Injectable()
export class GendersService {
  constructor(@InjectModel(Gender.name) private genderModel: Model<Gender>) {}

  findAll() {
    return this.genderModel.find().exec();
  }
}
