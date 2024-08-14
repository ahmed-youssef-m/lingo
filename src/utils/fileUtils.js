import { promises } from 'fs';
import path from 'path';

async function readJsonFile(filePath) {
  try {
    const data = await promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the JSON file:', err);
    throw err;
  }
}

async function writeJsonFile(filePath, data) {
  try {
    await promises.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing the JSON file:', err);
    throw err;
  }
}

export default {
  readJsonFile,
  writeJsonFile,
};