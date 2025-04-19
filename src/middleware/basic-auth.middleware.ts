import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BasicAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith('Basic ')) {
      throw new UnauthorizedException('No auth header');
    }

    const base64 = auth.split(' ')[1];
    const decoded = Buffer.from(base64, 'base64').toString();
    const [username, password] = decoded.split(':');

    if (username !== 'admin' || password !== 'admin123') {
      throw new UnauthorizedException('Invalid credentials');
    }

    next();
  }
}
