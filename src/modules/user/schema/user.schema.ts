import { IsDate, IsEmail, IsString } from 'class-validator';

export class User {
  @IsString()
  id: string;

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

  @IsDate()
  birthdate: Date;

  @IsString()
  gender: string;

  @IsString()
  profile_picture: string;

  @IsDate()
  signup_date: Date;
}
