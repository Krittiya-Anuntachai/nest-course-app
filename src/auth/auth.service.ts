/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthUser)
    private readonly authUserModel: typeof AuthUser,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const authuser = await this.authUserModel.findOne({
      where: { email: registerDto.email },
    });
    if (authuser) {
      throw new BadRequestException(
        'This email already exists. Please try again.',
      );
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(registerDto.password, salt);

    const newUser = await this.authUserModel.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashPassword,
    });
    return newUser;
  }

  async login(LoginDto: LoginDto) {
    const authuser = await this.authUserModel.findOne({
      where: { email: LoginDto.email },
    });
    if (!authuser) {
      throw new UnauthorizedException(
        'This email does not exist. Please try again.',
      );
    }

    const isValid = await compare(LoginDto.password, authuser.password);
    if (!isValid) {
      throw new UnauthorizedException('Error password!!!');
    }

    const payload = { user_id: authuser.id };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
    });

    return { access_token: token };
  }

  async getUserProfile(id: number) {
    return await this.authUserModel.findByPk(id, {
      attributes: ['id', 'username', 'email'],
    });
  }
}
