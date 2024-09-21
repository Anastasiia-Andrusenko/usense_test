const API_KEY = 'd5670d23ec17238aa9ac7f01';

const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export const getExchangeRates = async value => {
  const response = await fetch(`${API_URL}/${value}`);

  if (response.result === 'error') {
    throw new Error('Failed to fetch exchange rates');
  }

  return response.json();
};
