import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";

export class Pin {
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsArray()
    @ArrayMinSize(2, { message: 'Coordinates must have exactly 2 numbers.' })
    @ArrayMaxSize(2, { message: 'Coordinates must have exactly 2 numbers.' })
    coordinates: number[];
}