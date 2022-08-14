import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import profilePhoto from "../../images/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container page__container">
        <SectionTitle titleText="Студент" />
        <article className="about-me__content">
          <div className="about-me__text">
            <h3 className="about-me__name">Александр</h3>
            <p className="about-me__job">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__description">
              Я родился в городе Борисов, Республика Беларусь, закончил Полоцкий Государственный Универститет по сцециальности
              "Геодезия". В 2019 году переехал в город Владимир. С 2020 года работаю в компании "Darvin Studuio". Сначала как
              тестировщик, а теперь как верстальщик, паралельно изучая фронтенд разработку на курсе Яндекс.Практикума. У меня есть
              жена и cын. Люблю слушать музыку и спиннинг.
            </p>
            <ul className="about-me__links">
              <li className="about-me__links-item">
                <a href="https://www.facebook.com/" className="about-me__link" target="_blank" rel="noreferrer noopener">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://github.com/Algrigorovich" className="about-me__link" target="_blank" rel="noreferrer noopener">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="about-me__img-wrapper">
            <img src={profilePhoto} alt="Мультголова" title="Мультголова" className="about-me__profile-img" loading="lazy" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
