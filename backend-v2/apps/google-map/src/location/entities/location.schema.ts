import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class Pin {
    @Prop()
    type: string;

    @Prop()
    coordinates: number[];
}

@Schema({ versionKey: false })
export class Location extends AbstractDocument {
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

export const LocationSchema = SchemaFactory.createForClass(Location);