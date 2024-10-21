const express = require('express');
const app = express();
const port = 3000;

// Главный маршрут
app.get('/', (req, res) => {
    res.send('Hello Rakendus');
});

// Динамическое приветствие
app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello, ${name}`);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Приложение слушает на http://localhost:${port}`);
});
