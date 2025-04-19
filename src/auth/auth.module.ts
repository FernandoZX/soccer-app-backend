import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  exports: [AuthService], // Export AuthService so other modules can use it
})
export class AuthModule {}
