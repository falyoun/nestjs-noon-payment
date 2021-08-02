import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';


export class NoonContactDto {
  @IsString()
  @IsOptional()
  @MaxLength(25)
  firstName?: string;
  @IsString()
  @IsOptional()
  @MaxLength(25)
  lastName?: string;


  @IsString()
  @IsOptional()
  @MaxLength(15)
  phone?: string;
  @IsString()
  @IsOptional()
  @MaxLength(15)
  mobilePhone?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;
}