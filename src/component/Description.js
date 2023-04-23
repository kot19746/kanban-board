import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import imgSrc from "../img/cross.svg";

const Description = (props) => {
  let [clicked, setClicked] = React.useState(false);
  let [style, setStyle] = React.useState(
    "button button button_submit-inactive"
  );

  let [isDisabled, setDiabled] = React.useState(true);

  const textareaRef = useRef(null);

  let taskDescription = props.task.description
    ? props.task.description
    : "This task has no description";

  const clickHandler = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  const changeHandler = (event) => {
    let isEdited = Boolean(event.target.value !== taskDescription);
    if (isEdited) {
      setStyle((style = "button button button_submit-active"));
      setDiabled((isDisabled = false));
    }
    if (!isEdited) {
      setStyle((style = "button button button_submit-inactive"));
      setDiabled((isDisabled = true));
    }
  };

  const submitHandler = () => {
    let description = textareaRef.current.value;
    props.editDescription(props.task.id, description);
    resetHandler();
    setStyle((style = "button button button_submit-inactive"));
    setDiabled((isDisabled = true));
  };

  let descriptionText = (
    <>
      <p className="p" onClick={clickHandler}>
        {taskDescription}
      </p>
    </>
  );

  let descriptionEditForm = (
    <>
      <textarea
        className="textarea scroll"
        ref={textareaRef}
        defaultValue={taskDescription}
        onChange={changeHandler}
      ></textarea>
      <br />
      <button onClick={submitHandler} className={style} disabled={isDisabled}>
        Submit
      </button>
    </>
  );

  return (
    <>
      <div className="main__layout main__layout_description">
        <div
          className={`${
            (clicked && "main__description description-edit scroll") ||
            "main__description description scroll"
          }`}
        >
          <div className="description__layout">
            <h2 className="description__title">{props.task.name}</h2>
            <Link to="/">
              <img src={imgSrc} alt="close" />
            </Link>
          </div>
          {(clicked && descriptionEditForm) || descriptionText}
        </div>
      </div>
    </>
  );
};

export default Description;
