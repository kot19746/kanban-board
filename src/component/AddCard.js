import React from "react";

function AddCard(props) {
  return (
    <>
      <button
        onClick={props.handlerClick}
        className={`button button_add-card${
          (props.isDisabled && "_disabled") || ""
        }`}
        disabled={props.isDisabled}
      >
        <div
          className={`button-add-card__label${
            (props.isDisabled && "_disabled") || ""
          }`}
        >
          Add card
        </div>
      </button>
    </>
  );
}

export default AddCard;
