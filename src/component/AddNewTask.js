import React from "react";
import { useRef } from "react";
import AddCard from "./AddCard";

function AddNewTask(props) {
  let [clicked, setClicked] = React.useState(false);
  const inputRef = useRef(null);

  const handlerClick = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  let [style, changeState] = React.useState("button button_submit-inactive");
  const handlerChenge = (event) => {
    if (event.target.value)
      changeState((style = "button button_submit-active"));
    if (!event.target.value)
      changeState((style = "button button_submit-inactive"));
  };

  const handlerSubmit = () => {
    if (inputRef.current.value) {
      props.addTask(inputRef.current.value);
      resetHandler();
    }
  };

  let inputForm = (
    <>
      <input
        type="text"
        className="input"
        onChange={handlerChenge}
        ref={inputRef}
      />
      <button className={style} onClick={handlerSubmit}>
        Submit
      </button>
    </>
  );

  return (
    <>
      {(clicked && inputForm) || (
        <AddCard isDisabled={false} handlerClick={handlerClick} />
      )}
    </>
  );
}

export default AddNewTask;
