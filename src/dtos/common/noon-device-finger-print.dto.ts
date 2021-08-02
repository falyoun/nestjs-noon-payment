import { IsOptional, IsString } from 'class-validator';


export class NoonDeviceFingerPrintDto {

  @IsString()
  @IsOptional()
  sessionId?: string;

}