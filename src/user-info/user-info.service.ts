import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfo } from './entities/user-info.entity';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private userInfoModel: typeof UserInfo,
  ) {}

  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.userInfoModel.create(
      createUserInfoDto as Partial<UserInfo>,
    );
  }

  async findAll() {
    return await this.userInfoModel.findAll();
  }

  async findOne(id: number) {
    return await this.userInfoModel.findByPk(id);
  }

  async findFirstname(firstname: string) {
    return await this.userInfoModel.findOne({
      where: {
        firstname: firstname,
      },
    });
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.userInfoModel.update(updateUserInfoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.userInfoModel.destroy({
      where: { id: id },
    });
  }
}
