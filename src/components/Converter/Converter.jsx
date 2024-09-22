import { useEffect, useState } from 'react';
import css from './Converter.module.css';
import { getExchangeRates } from '../../api/exchangeRatesAPI';
import Select from 'react-select';
import { currencyNames } from '../CurrencyOptions';

const Converter = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [currencies, setCurrencies] = useState([]);
  const [timeUpdate, setTimeUpdate] = useState();
  const [rates, setRates] = useState();
  //
  // -------------------------------
  useEffect(() => {
    getExchangeRates(currency1)
      .then(data => {
        // ----------- ЗНАЧЕННЯ
        const fetchResult = data.conversion_rates;
        // console.log(fetchResult);
        setRates(fetchResult);

        // ----------- ЧАС ОНОВЛЕННЯ
        const fetchTime = data.time_last_update_utc;
        const dateObject = new Date(fetchTime);
        const formattedTime = dateObject.toLocaleString('en-GB', {
          timeZoneName: 'short',
        });
        setTimeUpdate(formattedTime);

        // ----------- ВАЛЮТИ
        const fetchedCurrencies = Object.keys(data.conversion_rates);
        setCurrencies(fetchedCurrencies);
        // console.log(fetchedCurrencies);
      })
      .catch(error => console.error(error));
  }, [currency1, currency2]);
  //
  // --------------------------------- кастомні стилі для валюти
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: '38px',
      width: '100px',
      border: '2px solid black',
      borderLeft: 'none',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      backgroundColor: state.selectProps.backgroundColor,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'black',
      },
    }),
    option: provided => ({
      ...provided,
      padding: '10px',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: 'black',
    }),
    singleValue: provided => ({
      ...provided,
      color: 'black',
    }),
  };
  //
  //-------------------------------- рахуємо курс
  const convert = (amount, from, to) => {
    if (!rates) return 0;
    // console.log(rates);
    const result = (amount * rates[to]) / rates[from];
    return result.toFixed(2);
  };
  //
  //-------------------------------- приймаємо валюту
  const handleCurrency1Change = currency => {
    setCurrency1(currency);
    setAmount2(convert(amount1, currency, currency2));
  };

  const handleCurrency2Change = currency => {
    setCurrency2(currency);
    setAmount2(convert(amount1, currency1, currency));
  };
  //
  //-------------------------------- приймаємо значення
  const handleAmount1Change = amount => {
    if (!isNaN(amount) && amount >= 0) {
      setAmount1(amount);
      setAmount2(convert(amount, currency1, currency2));
    }
  };

  const handleAmount2Change = amount => {
    if (!isNaN(amount) && amount >= 0) {
      setAmount2(amount);
      setAmount1(convert(amount, currency2, currency1));
    }
  };
  //-------------------------------- опції для SELECT
  const currencyOptions = currencies.map(currency => ({
    value: currency,
    label: currency,
  }));
  //--------------------------------

  const dynamicSentence = `${amount1} ${currencyNames[currency1]} equals ${amount2} ${currencyNames[currency2]}`;

  return (
    <div className={css.converter_wrapper}>
      <h1 className={css.title}>Current exchange rate converter</h1>
      <p className={css.time}>
        {timeUpdate || 'Update of the current rate failed'}
      </p>
      <div className={css.group}>
        <input
          type="number"
          value={amount1}
          min="0"
          step="0.01"
          onChange={e => {
            handleAmount1Change(e.target.value);
          }}
          className={css.input}
        />
        <Select
          value={currencyOptions.find(option => option.value === currency1)}
          options={currencyOptions}
          isSearchable
          styles={customStyles}
          backgroundColor="var(--yellow)"
          onChange={option => handleCurrency1Change(option.value)}
        />
      </div>
      <div className={css.group}>
        <input
          type="number"
          value={amount2}
          min="0"
          step="0.01"
          onChange={e => {
            handleAmount2Change(e.target.value);
          }}
          className={css.input}
        />
        <Select
          value={currencyOptions.find(option => option.value === currency2)}
          options={currencyOptions}
          isSearchable
          onChange={option => handleCurrency2Change(option.value)}
          styles={customStyles}
          backgroundColor="var(--blue)"
        />
      </div>
      <p className={css.exchange_text}>{dynamicSentence}</p>
    </div>
  );
};

export default Converter;
