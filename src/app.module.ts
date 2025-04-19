/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { EquipoModule } from './equipo/equipo.module';
import { PartidoModule } from './partido/partido.module';
import { ResultadoModule } from './resultado/resultado.module';
import { PrismaModule } from './prisma/prisma.module';
import { BasicAuthMiddleware } from './middleware/basic-auth.middleware';

@Module({
  imports: [
    UsersModule,
    EquipoModule,
    PartidoModule,
    ResultadoModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, BasicAuthMiddleware).forRoutes('*');
  }
}
