import { Controller, Get,HttpCode,Res,Req, Next, Param, HostParam } from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express'

@Controller({host:'localhost'})
export class SampleController {
 
  constructor(private readonly appService: AppService) {
   
  }

  @Get('/world')
  getHello(): number {
    
    
    return this.appService.getHello();
  }

  
 
}
