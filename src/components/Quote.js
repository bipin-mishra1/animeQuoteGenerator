import React from "react";
import "./styles.css";
const Quote = ({ anime, character, quote }) => {
  return (
    <>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>{quote}</h1>
          <h4>
            &mdash;{character}, from {anime}
            <br />
          </h4>
        </div>
      </div>
    </>
  );
};

export default Quote;
