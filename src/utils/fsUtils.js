const fs = require('fs').promises;
const path = require('path');

const dataPath = path.resolve(__dirname, '..', 'talker.json');

async function readData() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err}`);
  }
}

async function writeData(newData) {
  try {
    const data = await fs.writeFile(dataPath, JSON.stringify(newData));
    return data;
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err}`);
  }
}

module.exports = { readData, writeData };