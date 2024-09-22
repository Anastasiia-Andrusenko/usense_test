/* eslint-disable react/style-prop-object */
import Container from '../../components/Container/Container';
import Converter from '../../components/Converter/Converter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Converter.module.css';
import { GiMoneyStack } from 'react-icons/gi';

const ConverterPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={css.page_wrapper}>
            <div className={css.gif_wrapper}>
              <div className={css.gif_bg}></div>
              <div className={css.gif}></div>
            </div>
            <GiMoneyStack className={css.icon} />
            <Converter />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ConverterPage;
