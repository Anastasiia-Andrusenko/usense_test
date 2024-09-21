import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import css from './Candidate.module.css';
import { FaLink } from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';

const Candidate = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={css.about}>
            <div className={css.welcome}>
              <div className={css.photo_wrapper}>
                <div className={css.photo_bg}></div>
                <div className={css.photo}></div>
              </div>
              <div>
                <h3 className={css.title}>
                  Hello,
                  <br /> I'm Nastya.
                </h3>
                <p className={css.text}>
                  Thank you for the opportunity to complete the test task.{' '}
                  <br />I hope you liked it.
                </p>
              </div>
            </div>
            <div className={css.links_wrapper}>
              <a
                className={css.portfolio}
                href="https://anastasiia-andrusenko.github.io/nastia-can/"
                target="blank"
              >
                You can see my portfolio site at this link.{' '}
                <span className={css.icon}>
                  <FaLink />
                </span>
              </a>
              <br />
              <a
                className={css.cv}
                href="https://drive.google.com/file/d/1wj3jP9mHS4Sx_w5wvti_LsdVgd_z-R-h/view?usp=sharing"
                target="blank"
              >
                And at this link you can download my CV
                <span className={css.icon}>
                  <GrDocumentUser />
                </span>
              </a>
            </div>
          </div>

          <div className={css.social_wrapper}>
            <p className={css.social_title}>my contacts</p>
            <ul className={css.social_list}>
              <li className={css.social_item}>
                <a
                  target="blank"
                  className={css.social_icon}
                  href="mailto:nastya.andrus@gmail.com"
                >
                  <IoMail />
                </a>
              </li>
              <li className={css.social_item}>
                <a
                  href="https://www.linkedin.com/in/anastasiia-andrusenko/"
                  target="blank"
                  className={css.social_icon}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={css.social_item}>
                <a
                  href="https://t.me/Nastya_Andrus"
                  target="blank"
                  className={css.social_icon}
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className={css.social_item}>
                <a
                  href="https://www.facebook.com/anastasiia.andrusenko?locale=uk_UA"
                  target="blank"
                  className={css.social_icon}
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Candidate;
