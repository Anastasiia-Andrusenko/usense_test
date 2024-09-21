// import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Home.module.css';
import { PiSmileyWinkThin } from 'react-icons/pi';
// import { getNews } from '../../api/newsAPI';

const Home = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const data = await getNews();
  //       setNews(data.articles);
  //     } catch (error) {
  //       console.log('Error fetching news:', error);
  //     }
  //   };
  //   fetchNews();
  //   console.log(news);
  // }, []);

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
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
