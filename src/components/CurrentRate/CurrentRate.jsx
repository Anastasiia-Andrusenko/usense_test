import css from './CurrentRate.module.css';
import { FaDollarSign } from 'react-icons/fa6';
import { FaEuroSign } from 'react-icons/fa6';

const CurrentRate = ({ usd, eur }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <span className={css.currency}>USD</span>
        <span className={css.rate}>{usd || 'XX.XX'}</span>
        <FaDollarSign />
      </li>
      <li className={css.item}>
        <span className={css.currency}>EUR</span>
        <span className={css.rate}>{eur || 'XX.XX'}</span>
        <FaEuroSign />
      </li>
    </ul>
  );
};

export default CurrentRate;
