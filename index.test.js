// tests/index.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /api', () => {
  it('deveria retornar um Olá Mundo!', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Olá Mundo!');
  });
});

describe('GET /api/test', () => {
  it('deveria retornar uma mensagem de teste', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de teste');
  });
});

describe('GET /api/test', () => {
  it('Aqui deve ser retornado uma mensagem de teste', async () => {
    const res = await request(app).get('/api/test-2');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de teste 2');
  });
});


jest.setTimeout(30000); 