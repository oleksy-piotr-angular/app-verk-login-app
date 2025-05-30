import { UserDataDTO } from '../dto/user-data.dto';
import { UserDataModel } from '../models/user-data.model';

export class UserDataMapper {
  static fromDTO(dto: UserDataDTO): UserDataModel {
    return new UserDataModel(
      dto.id,
      dto.name,
      dto.username,
      {
        street: dto.address.street,
        suite: dto.address.suite,
        city: dto.address.city,
        zipcode: dto.address.zipcode,
        geo: {
          lat: dto.address.geo.lat,
          lng: dto.address.geo.lng,
        },
      },
      dto.phone,
      dto.website,
      {
        name: dto.company.name,
        catchPhrase: dto.company.catchPhrase,
        bs: dto.company.bs,
      }
    );
  }
}
