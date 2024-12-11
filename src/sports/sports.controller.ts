import { Controller, Get, Query } from '@nestjs/common';
import { SportsService } from './sports.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('sports') // Categoria no Swagger
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @ApiOperation({ summary: 'Obter partidas de basquete' }) // Descrição para o Swagger
  @ApiQuery({ name: 'from', required: true, description: 'Data inicial no formato YYYY-MM-DD' })
  @ApiQuery({ name: 'to', required: true, description: 'Data final no formato YYYY-MM-DD' })
  @Get('matches')
  async getMatches(@Query('from') from: string, @Query('to') to: string) {
    return this.sportsService.getMatches(from, to); // Retorna o JSON diretamente
  }
}