const API_KEY = '55728bc848b205b7a559a8f6fa247301';

const url =
  'https://gnews.io/api/v4/search?q=money&lang=en&country=us&max=6&apikey=' +
  API_KEY;

export const getNews = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles; // Повертаємо масив новин
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
