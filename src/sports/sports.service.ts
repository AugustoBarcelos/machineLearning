import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SportsService {
  private readonly apiKey = 'f302a9875a35658ff2c868a0f3de34dd55b3cc6cd9203e4e44b1597b43c0d051'; // Substitua pela sua chave da API
  private readonly baseUrl = 'https://apiv2.allsportsapi.com/basketball/';

  async getMatches(from: string, to: string): Promise<any> {
    try {
      // Configurando a URL e parâmetros da requisição
      const response = await axios.get(this.baseUrl, {
        params: {
          met: 'Fixtures', // Endpoint correto
          APIkey: this.apiKey, // Chave da API
          from, // Data inicial
          to,   // Data final
        },
      });

      // Retorna o JSON recebido da API
      return response.data;
    } catch (error) {
      // Lança uma exceção HTTP em caso de erro
      throw new HttpException(
        error.response?.data || 'Erro ao obter partidas',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
