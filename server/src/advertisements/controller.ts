import { Body, JsonController, Get, Param, Post, HttpCode,  } from 'routing-controllers'
// , Put , NotFoundError,
import Advertisement from '../advertisements/entity'

//  to implement    
//   Authorized  } 


@JsonController()
export default class AdvertisementController {

    @Get('/advertisements')
    async getAllAdvertisements() {
        const advertisements = await Advertisement.find()
        return {advertisements}
    }

    @Get('/advertisements/:id')
    getAdvertisement(
        @Param('id') id: number
    ){
        return Advertisement.findOne(id)
    }


    @Post('/advertisements')
    @HttpCode(201)
    createAdvertisement(
        @Body() advertisement: Advertisement
    ){
        return advertisement.save()
    }

    
    // @Put('/advertisements/:id')
    // async updateAdvertisement(
    //     @Param('id') id: number,
    //     @Body() update: Partial<Advertisement>
    // ){
    //     const advertisement = await Advertisement.findOne(id)

    // }


        
    
}