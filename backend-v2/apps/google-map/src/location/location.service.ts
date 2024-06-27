import { Injectable,Logger } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationService {
  constructor(private readonly repository: LocationRepository) {}

  create(createLocationDto: CreateLocationDto) {
    return this.repository.create(createLocationDto);
  }

  findAll() {
    return this.repository.find({});
  }

  findOne(_id: string) {
    return this.repository.find({ _id });
  }

  filter(request: any) {
    const filter: any = {};
    if (request.site_id) {
      filter.site_id = request.site_id;
    }
    return this.repository.find(filter);
  }

  update(_id: string, updateLocationDto: UpdateLocationDto) {
    return this.repository.findOneAndUpdate(
      { _id },
      { $set: updateLocationDto },
    );
  }

  remove(_id: string) {
    return this.repository.findOneAndDelete({ _id });
  }
}
