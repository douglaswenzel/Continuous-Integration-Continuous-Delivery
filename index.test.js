// tests/index.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /api', () => {
  it('should return Hello world!', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello world!');
  });
});

describe('GET /api/test', () => {
  it('should return a test message', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de teste');
  });
});


describe('GET /api/abacaxi', () => {
  it('aqui deverá vir um abacaxi', async () => {
    const res = await request(app).get('/api/abacaxi');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de abacaxi');
  });
});


jest.setTimeout(30000); 