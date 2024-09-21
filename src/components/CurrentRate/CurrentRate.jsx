import css from './CurrentRate.module.css';
import { FaDollarSign } from 'react-icons/fa6';
import { FaEuroSign } from 'react-icons/fa6';

const CurrentRate = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <span className={css.currency}>USD</span>
        <span className={css.rate}>41.20</span>
        <FaDollarSign />
      </li>
      <li className={css.item}>
        <span className={css.currency}>EUR</span>
        <span className={css.rate}> 45.90</span>
        <FaEuroSign />
      </li>
    </ul>
  );
};

export default CurrentRate;
