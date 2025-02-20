import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  providers: [UserService],
  imports: [UtilityModule],
  controllers: [UserController],
})
export class UserModule {}
