import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    console.log('请求所有猫咪');
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cat> {
    console.log('获取猫咪', id);
    return this.catService.findOne(id);
  }

  @Post()
  async creat(@Body() CatDto: Cat): Promise<Cat> {
    console.log('添加猫咪');
    return this.catService.create(CatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    console.log('删除猫咪', id);
    return this.catService.remove(id);
  }
}
