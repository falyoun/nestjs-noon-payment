import { ThreeDsAuthenticationDto, NoonOrderDto } from '@app/dtos';

export class NoonProcess3dPayloadDto {
  apiOperation: 'PROCESS_ACS_RESULT';
  order: NoonOrderDto;
  authentication: ThreeDsAuthenticationDto;
}
