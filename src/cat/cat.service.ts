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

  create(newCat: Cat): Promise<Cat> {
    const cat = new Cat();
    cat.firstName = newCat.firstName;
    cat.lastName = newCat.lastName;
    cat.id = newCat.id;

    return this.catRepository.save(cat);
  }

  async remove(id: number): Promise<void> {
    await this.catRepository.delete(id);
  }
}
