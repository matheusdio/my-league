import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from '../models/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body('name') name: string): Promise<Team> {
    return this.teamsService.create(name);
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body('name') name: string): Promise<Team> {
    return this.teamsService.update(id, name);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.teamsService.remove(id);
  }
}