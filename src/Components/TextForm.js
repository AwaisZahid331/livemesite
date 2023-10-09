import React from "react";
import { useState } from "react";
const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = ""; // Set newText as an empty string to clear the text
    setText(newText);
    props.showAlert("Message Cleared", "success");
  };

  const handleOnClick = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text");
  return (
    <>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor:
              props.mode === "dark"
                ? "#041938"
                : props.modes === "light"
                  ? "red"
                  : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnClick}
            id="TextBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Message
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length}words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Miuntes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text here to preview"}</p>
      </div>
      <hr />
    </>
  );
};

export default TextForm;
