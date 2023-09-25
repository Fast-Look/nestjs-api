import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GenderDocument = HydratedDocument<Gender>;

@Schema()
export class Gender {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: number;
}

export const GenderSchema = SchemaFactory.createForClass(Gender);
