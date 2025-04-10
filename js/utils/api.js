export const getCEP = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json()
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