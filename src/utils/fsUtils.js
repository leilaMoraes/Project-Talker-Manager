const fs = require('fs').promises;
const path = require('path');

const dataPath = path.resolve(__dirname, '../talker.json');

async function readData() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err}`);
  }
}

module.exports = { readData };