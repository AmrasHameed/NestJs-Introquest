import {
  BadGatewayException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService, CatService } from './app.service';
import { Cat, User } from './interfaces.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: string): string {
    console.log(id);
    return this.appService.getHello();
  }

  @Post()
  postData(@Body() user: User) {
    console.log(user);
  }
}
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findOne(@Query('name', ParseIntPipe) name: number) {
    return this.catsService.findOne(name);
  }
}
