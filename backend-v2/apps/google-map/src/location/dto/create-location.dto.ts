import { Pin } from './pin.dto';

export class CreateLocationDto {
    site_desc: string;
    site_address: string;
    site_tel: string;
    location: Pin;
    site_close_time: string;
    site_open_time: string;
    acerola_cherry_1000mg: number;
    salmon_fish_1000mg: number;
}
