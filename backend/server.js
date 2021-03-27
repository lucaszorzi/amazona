import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Server is already');
});

//Selecionar a porta  automaticamente de acordo com a porta do ambiente
const port = process.env.PORT || 5000; //use a porta do environment, se não existir, use 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});