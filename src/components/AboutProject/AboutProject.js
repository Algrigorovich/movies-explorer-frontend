import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import React from "react";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container page__container ">
        <SectionTitle titleText="О проекте" />
        <div className="about-project__text">
          <div className="about-project__column">
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="about-project__schedule">
          <div className="about-project__schedule-item about-project__schedule-item_size_small">
            <p className="about-project__week about-project__week_bg_green">1 неделя</p>
            <p className="about-project__week-description" lang="en">Back-end</p>
          </div>
          <div className="about-project__schedule-item">
            <p className="about-project__week">4 недели</p>
            <p className="about-project__week-description" lang="en">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutProject;
