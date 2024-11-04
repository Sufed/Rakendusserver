const request = require('supertest');
const app = require('./app');

let server;

beforeAll((done) => {
    server = app.listen(3001, () => {
        done();
    });
});

afterAll((done) => {
    server.close(done); // Закрываем сервер после тестов
});

describe('GET /', () => {
    it('should respond with Hello World', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World');
    });
});
