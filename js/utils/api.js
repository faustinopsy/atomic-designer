import { API_URLS } from '../config.js';
import { debugInfo, debugWarn, debugError, debugTime } from './debug.js';

const cache = new Map();
const CACHE_LIMIT = 100;

function setCache(chave, valor) {
  if (cache.size >= CACHE_LIMIT) {
    cache.delete(cache.keys().next().value);
  }
  cache.set(chave, valor);
}

export const getCEP = async (cep) => {
  if (cache.has(cep)) {
    debugInfo(`CEP ${cep}: cache hit`);
    return cache.get(cep);
  }
  const encerrar = debugTime(`CEP ${cep}: fetch`);
  try {
    const response = await fetch(`${API_URLS.CEP}/${cep}/json/`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    encerrar();
    setCache(cep, data);
    return data;
  } catch (error) {
    debugError(`CEP ${cep}: ${error.message}`);
    return null;
  }
};

export const getUser = async () => {
  const encerrar = debugTime('users: fetch');
  try {
    const response = await fetch(API_URLS.USERS);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    encerrar();
    debugInfo(`users: ${data.length} registros`);
    return data;
  } catch (error) {
    debugError(`users: ${error.message}`);
    return [];
  }
};

export default { getCEP, getUser };
