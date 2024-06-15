export class ShortestPathResponseDto {
  order: OrderDto;
  currentLocation: coordinate;
}

export class OrderDto {
  name: string;
  quantity: number;
}

export class coordinate {
    lon: number;
    lat: number;
}