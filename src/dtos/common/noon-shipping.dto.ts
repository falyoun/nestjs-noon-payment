import { NoonContactDto, NoonAddressDto } from '@app/dtos';

export class NoonShippingDto {
  address: NoonAddressDto;
  contact: NoonContactDto;
}