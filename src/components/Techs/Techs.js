import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__container page__container">
        <SectionTitle titleText="Технологии" />
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item" lang="en">HTML</li>
          <li className="techs__item" lang="en">CSS</li>
          <li className="techs__item" lang="en">JS</li>
          <li className="techs__item" lang="en">React</li>
          <li className="techs__item" lang="en">Git</li>
          <li className="techs__item" lang="en">Express.js</li>
          <li className="techs__item" lang="en">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
