import Container from '../Container/Container';
import CurrentRate from '../CurrentRate/CurrentRate';
import Navigation from '../Nav/Nav';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <CurrentRate />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
