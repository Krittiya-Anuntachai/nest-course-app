import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create')
  async create(@Body() CreateUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(CreateUserInfoDto);
    if (createUserInfo == null) {
      throw new Error('Can not Create Data!!!');
    }
    return {
      message: 'Create Data Complete',
      data: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const finduserInfo = await this.userInfoService.findOne(+id);
    if (finduserInfo == null) {
      throw new NotFoundException('Not Found Data!!!');
    }
    return finduserInfo;
  }

  @Get('/findfirstname/:firstname')
  async findFirstname(@Param('firstname') firstname: string) {
    const findfirstname = await this.userInfoService.findFirstname(firstname);
    if (findfirstname == null) {
      throw new NotFoundException('Not Found Data!!!');
    }
    return findfirstname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() UpdateUserInfoDto: UpdateUserInfoDto,
  ) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      UpdateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo === 0) {
      throw new NotFoundException('Not Found Data to Update!!!');
    }
    return { message: 'Update Data Complete' };
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyUesInfo = await this.userInfoService.remove(+id);
    console.log(destroyUesInfo);
    if (destroyUesInfo == 0) {
      throw new NotFoundException('Not Found Data to Remove!!!');
    }
    return { message: 'Remove Data Complete' };
  
      }
  }

