import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { Pin } from './pin.dto';

export class CreateLocationDto {
    @IsString()
    @IsNotEmpty()
    site_desc: string;
    
    @IsString()
    @IsNotEmpty()
    site_address: string;

    @IsString()
    site_tel: string;

    location: Pin;

    @IsString()
    @IsNotEmpty()
    site_close_time: string;

    @IsString()
    @IsNotEmpty()
    site_open_time: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Type(() => Number)
    acerola_cherry_1000mg: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Type(() => Number)
    salmon_fish_1000mg: number;
}
