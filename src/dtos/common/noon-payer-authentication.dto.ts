import { NoonEnrollmentDto } from '@app/dtos';
import { NoonValidationDto } from '@app/dtos';


export class NoonPayerAuthenticationDto {
  enrollment: NoonEnrollmentDto;
  validation: NoonValidationDto;

}