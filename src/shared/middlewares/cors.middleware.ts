import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: () => void) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header(
      'Access-Control-Allow-Methods',
      'PUT, OPTIONS, GET, POST, DELETE',
    );
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization',
    );
    response.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    next();
  }
}
