import { NoonRequestNvpDto } from '@app/dtos';


export class NoonRequestDto {
  url: string;
  method: string;
  nvp: NoonRequestNvpDto;
}