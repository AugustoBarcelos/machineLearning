# **Machine Learning Sports Analytics**

Um projeto completo para análises avançadas de esportes com **Machine Learning**, integrando dados em tempo real e aprendizado automático para gerar insights.

Este repositório é dividido em módulos. Este módulo específico é responsável por consumir os dados de basquete da API **AllSportsAPI**.

---

## **Estrutura do Projeto**

- **Módulo: Data Collection** (este repositório):
  - Consome dados de esportes em tempo real da **AllSportsAPI**.
  - Normaliza e estrutura os dados para uso nos módulos de Machine Learning.

- **Módulo: Machine Learning Models**:
  - Processa os dados coletados e treina modelos de predição de resultados esportivos.
  - Algoritmos usados: regressão, redes neurais, etc.

- **Módulo: Data Visualization**:
  - Gera gráficos e dashboards interativos para análise de tendências e previsões.

---

## **Sobre este Módulo: Data Collection**

### Funcionalidades

- **Coleta de dados de basquete**:
  - Informações de partidas (fixtures) em intervalos de datas.
  - Dados sobre equipes de basquete.

- **APIs utilizadas**:
  - [AllSportsAPI - Basketball](https://allsportsapi.com/basketball-api-documentation)

---

## **Tecnologias Utilizadas**

- **NestJS**: Framework para Node.js.
- **TypeScript**: Linguagem para desenvolvimento escalável.
- **Swagger**: Documentação interativa da API.
- **Axios**: Cliente HTTP para chamadas à API do AllSportsAPI.

---

## **Configuração**

### **Pré-requisitos**

Certifique-se de ter instalado:

- **Node.js** (versão LTS recomendada):  
  [Download Node.js](https://nodejs.org/)
- **NestJS CLI**:  
  Instale o CLI com:
  ```bash
  npm install -g @nestjs/cli
  ```

---

### **Passos para Configuração**

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/machine-learning-sports.git
   cd machine-learning-sports/data-collection
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a chave de API:
   - Substitua `'SUA_CHAVE_CORRETA'` no arquivo `sports.service.ts` pela sua chave obtida no [AllSportsAPI](https://allsportsapi.com/).

4. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

5. Acesse a documentação interativa no Swagger:
   ```
   http://localhost:3000/api
   ```

---

## **Endpoints Disponíveis**

### **Rota: Partidas de Basquete**

- **Descrição**: Retorna informações sobre partidas em um intervalo de datas.
- **Método**: `GET`
- **URL**: `/sports/matches`
- **Parâmetros**:
  - `from`: Data inicial no formato `YYYY-MM-DD`.
  - `to`: Data final no formato `YYYY-MM-DD`.
- **Exemplo de Requisição**:
  ```
  GET http://localhost:3000/sports/matches?from=2022-04-01&to=2022-04-10
  ```

---

### **Rota: Equipes de Basquete**

- **Descrição**: Retorna informações sobre equipes disponíveis.
- **Método**: `GET`
- **URL**: `/sports/teams`

---

## **Swagger**

Acesse a documentação interativa da API no seguinte endereço:  
```
http://localhost:3000/api
```

Lá você poderá visualizar e testar todos os endpoints.

---

## **Como Contribuir**

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um Pull Request.

---

## **Próximos Passos**

- **Integração com o módulo de Machine Learning**:
  - Usar os dados coletados para treinar modelos preditivos.
- **Automação da coleta de dados**:
  - Configurar agendadores para atualizar os dados em tempo real.

---
