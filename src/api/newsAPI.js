const API_KEY = '5039236b2acd46de8fea116de6bb4b8f';

const url =
  'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2023-09-21&' +
  'sortBy=popularity&' +
  `apiKey=${API_KEY}`;

// const req = new Request(url);

export const getNews = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
