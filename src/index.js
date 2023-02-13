const express = require('express');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const NOT_FOUND = 404;
const PORT = '3000';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// início dos endpoints criados por mim

const { readData } = require('./utils/fsUtils');

app.get('/talker', async (_req, res) => {
  const data = await readData();
  if (!data) return res.status(HTTP_OK_STATUS).json([]);
  return res.status(HTTP_OK_STATUS).json(data);
});

app.get('/talker/:id', async (req, res) => {
  const data = await readData();
  const { id } = req.params;
  const filterData = data.find((talker) => talker.id === Number(id));
  const message = { message: 'Pessoa palestrante não encontrada' };
  if (!filterData) return res.status(NOT_FOUND).json(message);
  return res.status(HTTP_OK_STATUS).json(filterData);
});

const generateToken = require('./utils/generateToken');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');

app.post('/login', emailValidation, passwordValidation, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});
