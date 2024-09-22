import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Home.module.css';
import { PiSmileyWinkThin } from 'react-icons/pi';
import { getNews } from '../../api/newsAPI';
import NewsCard from '../../components/NewsCard/NewsCard';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getNews();
        setNews(articles);
        console.log(articles);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={css.hero}>
            <h2 className={css.title}>
              The real measure of your wealth is how much you’d be worth if you
              lost all your money.
            </h2>
            <div className={css.illustration_wrapper}>
              <div className={css.illustration_bg}></div>
              <div className={css.illustration}></div>
              <PiSmileyWinkThin className={css.icon} />
            </div>
          </div>
          <div className={css.news}>
            <h3 className={css.news_title}>
              The latest news is related to money
            </h3>
            <ul className={css.news_list}>
              {news.length > 0 ? (
                news.map((article, index) => (
                  <li className={css.news_item} key={index}>
                    <NewsCard
                      title={article.title}
                      description={article.description}
                      image={article.image}
                      url={article.url}
                    />
                  </li>
                ))
              ) : (
                <p className={css.message}>No news available.</p>
              )}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
