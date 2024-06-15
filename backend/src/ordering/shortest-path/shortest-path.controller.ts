import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShortestPathService } from './shortest-path.service';
import { ShortestPathRequestDto } from './dto/shortestPathRequest.dto'

@Controller('shortest-path')
export class ShortestPathController {
    constructor(private readonly shortestPathService: ShortestPathService) {}

    @Post()
    getShortestPath(@Body() request: ShortestPathRequestDto) {
        return this.shortestPathService.findShortestPath(request);
    }

    @Get("/list-location")
    getAllLocation() {
        return this.shortestPathService.listAllLocation();
    }
}
