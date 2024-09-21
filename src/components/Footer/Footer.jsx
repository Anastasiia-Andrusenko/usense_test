import Container from '../Container/Container';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <p className={css.text}>
          The test assignment from the USENSE company was completed by Anastasia
          Andrusenko.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
