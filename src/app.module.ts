import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from './cat/cat.module';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DATABASE_SYNC', true),
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
    CatModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
