import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    console.log('收到请求');
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Post()
  async creat(): Promise<Cat> {
    console.log('添加猫咪');
    return this.catService.create();
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.catService.remove(id);
  }
}
