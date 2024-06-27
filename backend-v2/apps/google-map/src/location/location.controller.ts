import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Logger } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('/create')
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get('')
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Post('/filter')
  findOneByFilter(@Body() request: any) {
    return this.locationService.filter(request);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(id);
  }
}
