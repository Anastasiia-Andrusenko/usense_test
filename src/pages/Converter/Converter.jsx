/* eslint-disable react/style-prop-object */
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Converter.module.css';

const ConverterPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={css.gif}></div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ConverterPage;
