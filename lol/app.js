const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Dados dos campeões (exemplo simples)
const campeoes = [
  { id: 1, nome: 'Aatrox', papel: 'Lutador', ataque: 8, defesa: 6, magico: 3 },
  { id: 2, nome: 'Ahri', papel: 'Mago', ataque: 7, defesa: 4, magico: 9 },
  { id: 3, nome: 'Garen', papel: 'Tanque', ataque: 6, defesa: 8, magico: 2 },
  { id: 4, nome: 'Lux', papel: 'Mago', ataque: 5, defesa: 3, magico: 10 },
  // Adicione mais campeões conforme necessário
];

// Endpoint para obter todos os campeões
app.get('/campeoes', (req, res) => {
  res.json(campeoes);
});

// Endpoint para obter um campeão pelo ID
app.get('/campeoes/:id', (req, res) => {
  const campeao = campeoes.find(c => c.id === parseInt(req.params.id));
  if (campeao) {
    res.json(campeao);
  } else {
    res.status(404).send('Campeão não encontrado');
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});