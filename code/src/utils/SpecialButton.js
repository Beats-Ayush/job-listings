import React from "react";
import { useStore } from "../store/store";

const SpecialButton = ({ text, deleteClass }) => {
  const dispatch = useStore(false)[1];

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch("SPECIFICATION_SELECTED", e.target.innerText);
  };

  return (
    <button
      type="submit"
      className={`card__list__item__info__btn ${
        deleteClass ? deleteClass : ""
      }`}
      onClick={onFormSubmitHandler}
    >
      {text}
    </button>
  );
};

export default SpecialButton;
