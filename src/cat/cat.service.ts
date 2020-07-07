import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catRepository.findOne(id);
  }

  create(): Promise<Cat> {
    const user = new Cat();
    user.firstName = 'chen';
    user.lastName = 'pp';
    user.id = 2;

    return this.catRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.catRepository.delete(id);
  }
}
