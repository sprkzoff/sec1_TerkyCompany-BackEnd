import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkshopsModule } from './workshops/workshops.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MembersTModule } from './members-t/members-t.module';
import { CardDetailsModule } from './card-details/card-details.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'db',
      entities: [join(__dirname, '**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    WorkshopsModule,
    MembersTModule,
    CardDetailsModule,
    FeedbacksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
