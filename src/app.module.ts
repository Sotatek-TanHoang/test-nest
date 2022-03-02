import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { SampleController } from './sample.controller';
@Module({
  imports: [],
  controllers: [AppController, SampleController],
  providers: [AppService],
})
export class AppModule {}
