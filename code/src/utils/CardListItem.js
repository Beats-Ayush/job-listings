import React from "react";
import SpecialButton from "./SpecialButton";
const { v4: uuidv4 } = require("uuid");

const CardListItem = (props) => {
  const {
    id,
    company,
    logo,
    newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;

  const cardListItemClassName = `card__list__item ${
    newJob && featured ? "newAndFeatured" : ""
  }`;

  return (
    <li className={cardListItemClassName} key={id}>
      <div className="card__list__item__img__container">
        <img src={logo} alt="" className="card__list__item__img" />
      </div>
      <div className="card__list__item__info__container">
        <div className="card__list__item__info__container__child1">
          <div className="card__list__item__info__overhead">
            <p className="card__list__item__info__overhead__type">{company}</p>
            {newJob && (
              <span className="card__list__item__info__new">NEW!</span>
            )}
            {featured && (
              <span className="card__list__item__info__featured">FEATURED</span>
            )}
          </div>
          <h2 className="card__list__item__info__title">{position}</h2>

          <ul className="card__list__item__info__details">
            <li>
              <span>{postedAt}</span>
            </li>
            <li>
              <span>{contract}</span>
            </li>
            <li>
              <span>{location}</span>
            </li>
          </ul>
        </div>
        <div className="card__list__item__info__container__child2">
          <SpecialButton text={role} />
          <SpecialButton text={level} />
          {languages.map((l) => (
            <SpecialButton text={l} key={uuidv4()} />
          ))}
          {tools.map((t) => (
            <SpecialButton text={t} key={uuidv4()} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default CardListItem;
