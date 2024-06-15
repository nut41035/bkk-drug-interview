import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocationsDocument = HydratedDocument<Locations>;

@Schema()
export class Pin {
  @Prop()
  type: string;

  @Prop()
  coordinates: number[];
}

@Schema()
export class Locations {
  @Prop({ required: true, unique: true })
  site_id: string;

  @Prop()
  site_desc: string;

  @Prop()
  site_address: string;

  @Prop()
  site_tel: string;

  @Prop({ type: Pin })
  location: Pin;

  @Prop()
  site_close_time: string;

  @Prop()
  site_open_time: string;

  @Prop()
  acerola_cherry_1000mg: number;

  @Prop()
  salmon_fish_1000mg: number;
}
export const LocationsSchema = SchemaFactory.createForClass(Locations);