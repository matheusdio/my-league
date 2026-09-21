import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../models/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async create(name: string): Promise<Team> {
    const team = this.teamsRepository.create({ name });
    return this.teamsRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamsRepository.find();
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamsRepository.findOneBy({ id });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  async update(id: string, name: string): Promise<Team> {
    await this.teamsRepository.update(id, { name });
    const team = await this.findOne(id);
    return team;
  }

  async remove(id: string): Promise<void> {
    const result = await this.teamsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }
}