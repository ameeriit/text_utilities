import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

let myStyle={
  color:props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  
}

  return (
    <div className="container rounded-2" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2 className="my-4">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse the text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyse your text quickly and effeciently. Be it word count, Character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character conter tiil that provides instant character count & work count statistics for a given tect. Textutils reports the number of words and character. Thus it is suitable for writing text with word? character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatiable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera. It suits to count character in facebook, blogs books, excel document, pdf documnet, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-info mb-3 "
          style={myStyle}
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
