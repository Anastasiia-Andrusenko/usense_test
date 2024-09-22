import css from './NewsCard.module.css';

const NewsCard = ({ title, description, image, url }) => {
  return (
    <div className={css.card}>
      <img src={image} alt={title} className={css.image} />
      <div className={css.content}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={css.btn}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
