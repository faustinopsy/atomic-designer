const cache = {}
export const getCEP = async (cep) => {
    console.log(cache[cep])
    console.time("cache");
    if (cache[cep]) {
        console.log(`cache: Dados carregados do cache: ${JSON.stringify(cache[cep])}`);
        console.timeLog("cache");
        return cache[cep];
    }
    console.time("api");
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json()
    console.log(`api: Dados carregados da API: ${JSON.stringify(data)}`);
    console.timeLog("api");
    cache[cep] = data;
    return data
  } catch (error) {
    console.error('Erro ao buscar cep:', error);
    return [];
  }
};

export const getUser = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Erro ao buscar users:', error);
      return [];
    }
  };

export default {getCEP, getUser};