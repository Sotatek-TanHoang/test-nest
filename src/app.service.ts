import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private number = 0;
  getHello(): number {
    this.number++;
    return this.number;
  }
  getRand(): string {
    return 'wtf';
  }
}
