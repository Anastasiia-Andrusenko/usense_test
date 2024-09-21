import Container from '../Container/Container';
import CurrentRate from '../CurrentRate/CurrentRate';
import Navigation from '../Nav/Nav';
import css from './Header.module.css';
import { getExchangeRates } from '../../api/exchangeRatesAPI';
import { useEffect, useState } from 'react';

const Header = () => {
  const [rateUSD, setRateUSD] = useState();
  const [rateEUR, setRateEUR] = useState();

  useEffect(() => {
    getExchangeRates('UAH')
      .then(data => {
        console.log(data.conversion_rates);
        const USD = 1 / data.conversion_rates.USD;
        const EUR = 1 / data.conversion_rates.EUR;
        console.log(`usd: ${USD}, eur: ${EUR}`);
        setRateUSD(USD.toFixed([2]));
        setRateEUR(EUR.toFixed([2]));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <CurrentRate usd={rateUSD} eur={rateEUR} />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
