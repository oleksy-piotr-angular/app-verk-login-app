import { UserDataDTO } from '../dto/user-data.dto';
import {
  Address,
  Company,
  Geo,
  UserDataModel,
} from '../models/user-data.model';

export class UserDataMapper {
  static fromDTO(dto: UserDataDTO): UserDataModel {
    const geo = new Geo(dto.address.geo.lat, dto.address.geo.lng);

    const address = new Address(
      dto.address.street,
      dto.address.suite,
      dto.address.city,
      dto.address.zipcode,
      geo
    );

    const company = new Company(
      dto.company.name,
      dto.company.catchPhrase,
      dto.company.bs
    );

    return new UserDataModel(
      dto.id,
      dto.name,
      dto.username,
      address,
      dto.phone,
      dto.website,
      company
    );
  }
}
