const request = require('supertest');
const app = require('./app'); // Импортируйте ваше приложение

describe('GET /', () => {
    it('should respond with Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World');
    });
});
