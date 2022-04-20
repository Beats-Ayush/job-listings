import React from "react";
import SpecialButton from "../utils/SpecialButton";
const { v4: uuidv4 } = require("uuid");

const CardSpecificationsList = ({
  requiredSpecifications,
  deleteSpecification,
  clearAllSpecifications,
}) => {
  return (
    <div className="card__specifications">
      <ul className="card__specifications__list">
        {requiredSpecifications.map((reqSpec) => (
          <li className="card__specifications__list__item" key={uuidv4()}>
            <SpecialButton text={reqSpec} deleteClass="delete" />
            <button
              className="card__specifications__list__item__delete-icon__wrapper"
              type="submit"
              name={reqSpec}
              onClick={deleteSpecification}
            >
              <img
                src="images/icon-remove.svg"
                alt=""
                className="card__specifications__list__item__delete-icon"
                name={reqSpec}
              />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="card__specifications__clear"
        onClick={clearAllSpecifications}
      >
        Clear
      </button>
    </div>
  );
};

export default CardSpecificationsList;
