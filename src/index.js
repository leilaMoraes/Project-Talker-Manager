const express = require('express');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const CREATED = 201;
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

const { readData, writeData } = require('./utils/fsUtils');

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
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const talkValidation = require('./middlewares/talkValidation');
const watchedAtValidation = require('./middlewares/watchedAtValidation');
const rateValidation = require('./middlewares/rateValidation');

app.post('/login', emailValidation, passwordValidation, (_req, res) => {
  const token = generateToken();
  return res.status(HTTP_OK_STATUS).json({ token });
});

app.post('/talker', tokenValidation, nameValidation,
ageValidation, talkValidation, watchedAtValidation, rateValidation, async (req, res) => {
  const data = await readData();
  const newTalker = {
    id: data.length + 1,
    ...req.body,
  };
  data.push(newTalker);
  await writeData(data);
  return res.status(CREATED).json(newTalker);
});

app.put('/talker/:id', tokenValidation, nameValidation,
ageValidation, talkValidation, watchedAtValidation, rateValidation, async (req, res) => {
  const data = await readData();
  const { id } = req.params;
  const editedTalker = req.body;
  const index = data.findIndex((talker) => talker.id === Number(id));
  data[index] = { id: Number(id), ...editedTalker };
  await writeData(data);
  return res.status(HTTP_OK_STATUS).json(data[index]);
});
