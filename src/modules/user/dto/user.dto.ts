import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  user_code: string;

  @IsString()
  dealership_code: string;

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  cellphone: string;

  @IsString()
  city: string;

  @IsEmail()
  recover_email: string;

  @IsString()
  birthdate: string;

  @IsString()
  gender: string;

  @IsString()
  profile_picture: string;

  @IsOptional()
  @IsString()
  signup_date: string;
}
