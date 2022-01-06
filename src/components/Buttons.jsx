import React from "react";

const Buttons = ({ type, onClickHandler }) => {
  return (
    <>
      <button onClick={onClickHandler} className="btn__item">
        {type}
      </button>
    </>
  );
};

export default Buttons;
