import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are adjusted to normal form", "success")
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#2290b4" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary me-2 my-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 my-2" onClick={handleLoClick}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 my-2" onClick={handleOnCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}

//add email extract function
//add sentence case function
//add title case function
