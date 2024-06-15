export class DistanceResponseDto {
    meta: Meta;
    data: Data[];
}

export class Meta {
    from: Coordiante;
    to: Coordiante;
    config: string;
}

export class Coordiante {
    lon: number;
    lat: number;
}

export class Data {
    fdistance: number;
    tdistance: number;
    id: number;
    guide: Guide[];
    distance: number;
    interval: number;
    penalty: number;
}

export class Guide {
    turn: number;
    name: string;
    distance: number;
    interval: number;
}
