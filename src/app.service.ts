import { Injectable } from '@nestjs/common';
import { PosData } from './dto/app.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService){}

  async savePosInfo(input: PosData){
    const {
          percentage,
          carrierName,
          canReachInternet,
          location,
          ipAddress,
          country, 
          deviceBrand,
          deviceManufacturer,
          deviceName,
          connectedToInternet,
          typeOfConnection,
          model
    } = input;

    await this.prisma.pos.create({
      data: {
        batteryPercentage: percentage,
        brandName: deviceBrand,
        canReachInternet,
        connectedToInternet,
        carrierName,
        location,
        model,
        typeOfConnection,
        manufacturer: deviceManufacturer,
        deviceName,
        country,
        ipAddress
      }
    });
    
  }

   async getAllData(){
    try {
      const getData = await this.prisma.pos.findMany({});
    } catch (error) {
      throw new Error('An Error Occurred While Fetching All Data')
    }
     
  }

   getSingleData(id: number) {
   this.prisma.pos.findUnique({where: {id}})
  }
}
