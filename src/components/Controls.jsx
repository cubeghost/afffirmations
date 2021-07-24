import React, { useContext } from "react";

import { StateContext } from "../state/index.jsx";

export default function Controls() {
  const { values, setField } = useContext(StateContext);
  const { backgroundImage, topText, bottomText, textColor, glowColor, hasBorder } = values;

  const handleTextChange = event => {
    setField(event.target.name, event.target.value);
  };

  const handleNumberChange = event => {
    setField(event.target.name, Number(event.target.value));
  };
  
  const handleCheckboxChange = event => {
    setField(event.target.name, event.target.checked);
  };

  return (
    <>
      <fieldset>
        <legend>Top text</legend>
        <div className="field">
          <label htmlFor="topText.value">Text</label>
          <input
            type="text"
            id="topText.value"
            name="topText.value"
            onChange={handleTextChange}
            value={topText.value}
          />
        </div>
        <div className="field">
          <label htmlFor="topText.size">Size</label>
          <input
            type="range"
            min="5"
            max="30"
            id="topText.size"
            name="topText.size"
            onChange={handleNumberChange}
            value={topText.size}
          />
        </div>
        <div className="field">
          <label htmlFor="topText.squish">Squish</label>
          <input
            type="range"
            min="-50"
            max="95"
            id="topText.squish"
            name="topText.squish"
            onChange={handleNumberChange}
            value={topText.squish}
          />
          <input
            type="number"
            inputMode="numeric"
            min="-50"
            max="95"
            name="topText.squish"
            onChange={handleNumberChange}
            value={topText.squish}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Bottom text</legend>
        <div className="field">
          <label htmlFor="bottomText.value">Text</label>
          <input
            type="text"
            id="bottomText.value"
            name="bottomText.value"
            onChange={handleTextChange}
            value={bottomText.value}
          />
        </div>
        <div className="field">
          <label htmlFor="bottomText.size">Size</label>
          <input
            type="range"
            min="5"
            max="30"
            id="bottomText.size"
            name="bottomText.size"
            onChange={handleNumberChange}
            value={bottomText.size}
          />
        </div>
        <div className="field">
          <label htmlFor="bottomText.squish">Squish</label>
          <input
            type="range"
            min="-50"
            max="95"
            id="bottomText.squish"
            name="bottomText.squish"
            onChange={handleNumberChange}
            value={bottomText.squish}
          />
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="textColor">Text color</label>
        <input
          type="color"
          id="textColor"
          name="textColor"
          onChange={handleTextChange}
          value={textColor}
        />
      </div>

      <div className="field">
        <label htmlFor="glowColor">Glow color</label>
        <input
          type="color"
          id="glowColor"
          name="glowColor"
          onChange={handleTextChange}
          value={glowColor}
        />
      </div>
      
      <div className="field">
        <label htmlFor="hasBorder">Border?</label>
        <input
          type="checkbox"
          id="hasBorder"
          name="hasBorder"
          onChange={handleCheckboxChange}
          checked={hasBorder}
        />
      </div>
    </>
  );
}
