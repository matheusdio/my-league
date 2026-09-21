import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../teams/teams.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Team } from '../models/team.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('TeamsService', () => {
  let service: TeamsService;
  let repository: Repository<Team>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamsService,
        {
          provide: getRepositoryToken(Team),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TeamsService>(TeamsService);
    repository = module.get<Repository<Team>>(getRepositoryToken(Team));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a team', async () => {
      const teamData = { name: 'Test Team' };
      const expectedTeam = { id: 'test-uuid', ...teamData };

      jest.spyOn(repository, 'create').mockReturnValue(expectedTeam as Team);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedTeam as Team);

      const result = await service.create(teamData.name);
      expect(result).toEqual(expectedTeam);
      expect(repository.create).toHaveBeenCalledWith({ name: teamData.name });
      expect(repository.save).toHaveBeenCalledWith(expectedTeam);
    });
  });

  describe('findAll', () => {
    it('should return an array of teams', async () => {
      const teams = [
        { id: 'uuid1', name: 'Team 1' },
        { id: 'uuid2', name: 'Team 2' },
      ] as Team[];

      jest.spyOn(repository, 'find').mockResolvedValue(teams);

      const result = await service.findAll();
      expect(result).toEqual(teams);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a team by ID', async () => {
      const teamId = 'test-uuid';
      const expectedTeam = { id: teamId, name: 'Test Team' } as Team;

      jest.spyOn(repository, 'findOneBy').mockResolvedValue(expectedTeam);

      const result = await service.findOne(teamId);
      expect(result).toEqual(expectedTeam);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id: teamId });
    });

    it('should throw NotFoundException if team not found', async () => {
      const teamId = 'non-existent-uuid';
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);

      await expect(service.findOne(teamId)).rejects.toThrow(NotFoundException);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id: teamId });
    });
  });

  describe('update', () => {
    it('should update a team', async () => {
      const teamId = 'test-uuid';
      const teamData = { name: 'Updated Team' };
      const updatedTeam = { id: teamId, ...teamData } as Team;

      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);
      jest.spyOn(service, 'findOne').mockResolvedValue(updatedTeam);

      const result = await service.update(teamId, teamData.name);
      expect(result).toEqual(updatedTeam);
      expect(repository.update).toHaveBeenCalledWith(teamId, { name: teamData.name });
      expect(service.findOne).toHaveBeenCalledWith(teamId);
    });
  });

  describe('remove', () => {
    it('should remove a team', async () => {
      const teamId = 'test-uuid';
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);

      await expect(service.remove(teamId)).resolves.toBeUndefined();
      expect(repository.delete).toHaveBeenCalledWith(teamId);
    });

    it('should throw NotFoundException if team not found', async () => {
      const teamId = 'non-existent-uuid';
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);

      await expect(service.remove(teamId)).rejects.toThrow(NotFoundException);
      expect(repository.delete).toHaveBeenCalledWith(teamId);
    });
  });
});