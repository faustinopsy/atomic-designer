import { API_URLS } from '../config.js';

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
    return cache.get(cep);
  }
  try {
    const response = await fetch(`${API_URLS.CEP}/${cep}/json/`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    setCache(cep, data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    return null;
  }
};

export const getUser = async () => {
  try {
    const response = await fetch(API_URLS.USERS);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar users:', error);
    return [];
  }
};

export default { getCEP, getUser };
