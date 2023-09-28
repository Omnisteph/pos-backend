import { Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { PosData } from './dto/app.dto';
import { Response } from 'express';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Post('create')
    savePosInfo(@Body() input: PosData, @Res() res: Response){
     this.appService.savePosInfo(input);
     res.status(200).json({message: 'Data Has Been Created', input: input});
  }

  @Get()
   getAllData(){
     const getData = this.appService.getAllData();
     console.log(getData);
  }

  @Get(':id')
   getSingleData(@Param('id') id: string){
     this.appService.getSingleData(+id);
  }

}


