import React, { useContext } from "react";
import clamp from 'lodash/clamp';

import { StateContext } from "../state/index.jsx";
import Upload from './Upload.jsx';

const SIZE_MIN = 5;
const SIZE_MAX = 30;
const SQUISH_MIN = -25;
const SQUISH_MAX = 99;

export default function Controls() {
  const { values, setField } = useContext(StateContext);
  const { backgroundImage, topText, bottomText, textColor, glowColor, hasBorder } = values;

  const handleTextChange = event => {
    setField(event.target.name, event.target.value);
  };

  const handleNumberChange = event => {
    const min = Number(event.target.min);
    const max = Number(event.target.max);
    const value = clamp(Number(event.target.value), min, max);
    setField(event.target.name, value);
  };
  
  const handleCheckboxChange = event => {
    setField(event.target.name, event.target.checked);
  };

  return (
    <>
      <Upload />
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
          <input
            type="number"
            inputMode="numeric"
            min="5"
            max="30"
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

      <fieldset>
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
        <div className="field field--toggle">
          <label htmlFor="hasBorder">
            <span>Border?</span>
            <div className="toggle">
              <input
                type="checkbox"
                id="hasBorder"
                name="hasBorder"
                onChange={handleCheckboxChange}
                checked={hasBorder}
              />
              <span>On</span>
              <span>Off</span>
            </div>
          </label>
          
        </div>
      </fieldset>
    </>
  );
}
