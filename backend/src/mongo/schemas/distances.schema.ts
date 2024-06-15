import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocationsDocument = HydratedDocument<Distances>;

@Schema()
export class Distances {
  @Prop({ required: true, unique: true })
  key: string;

  @Prop()
  distance: number;
}
export const DistancesSchema = SchemaFactory.createForClass(Distances);