import { BadRequestException, Injectable } from '@nestjs/common';
import { encryptPassword } from '../auth/utils/bcrypt';
import { CreateUserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userdb = await this.userRepository.findByEmail(createUserDto.email);
    if (userdb) throw new BadRequestException('El email ya esta registrado.');

    const hashPassword = await encryptPassword(createUserDto.password);
    createUserDto.password = hashPassword;
    createUserDto.signup_date = new Date().toString();
    const result = await this.userRepository.create(createUserDto);
    return result;
  }
}
