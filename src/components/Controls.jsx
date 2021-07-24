import React from "react";

import useFields from "../state/index.js";

export default function Controls() {
  const [values, setField] = useFields();
  
  const handleTextChange = (event) => {
    setField(event.target.name, event.target.value);
  };

  const handleNumberChange = (event) => {
    setField(event.target.name, Number(event.target.value));
  };

  return (
    <>
      <div className="field">
        <label for="backgroundImage">Background</label>
        <input type="file"
               accept="image/*"
               id="backgroundImage"
               name="backgroundImage" />        
      </div>

      <fieldset>
        <legend>
          Top text
        </legend>
        <div className="field">
          <label for="topText.value">Text</label>
          <input type="text"
                 id="topText.value"
                 name="topText.value"
                 onChange={handleTextChange}
                 value={values.topText.value} />        
        </div>
        <div className="field">
          <label for="topText.size">Size</label>
          <input type="range"
                 min="5"
                 max="30"
                 id="topText.size"
                 name="topText.size"
                 value="15" />        
        </div>
        <div className="field">
          <label for="topText.squish">Squish</label>
          <input type="range"
                 min="-50"
                 max="95"
                 id="topText.squish"
                 name="topText.squish"
                 onChange={handleNumberChange}
                 value={values.topText.squish} />    
          <input type="number"
                 inputmode="numeric"
                 min="-50"
                 max="95"
                 name="topText.squish"
                 onChange={handleNumberChange}
                 value={values.topText.squish} />
        </div>
      </fieldset>

      <fieldset>
        <legend>
          Bottom text
        </legend>
        <div className="field">
          <label for="bottomText.value">Text</label>
          <input type="text"
                 id="bottomText.value"
                 name="bottomText.value"
                 onChange={handleTextChange}
                 value={values.bottomText.value} />        
        </div>
        <div className="field">
          <label for="bottomText.size">Size</label>
          <input type="range"
                 min="5"
                 max="30"
                 id="bottomText.size"
                 name="bottomText.size"
                 onChange={handleNumberChange}
                 value={values.bottomText.size} />      
        </div>
        <div className="field">
          <label for="bottomText.squish">Squish</label>
          <input type="range"
                 min="-50"
                 max="95"
                 id="bottomText.squish"
                 name="bottomText.squish"
                 onChange={handleNumberChange}
                 value={values.bottomText.squish} />        
        </div>
      </fieldset>

      <div className="field">
        <label for="textColor">Text color</label>
        <input type="color"
               id="textColor"
               name="textColor"
               value="#FFFFFF" />
      </div>

      <div className="field">
        <label for="glowColor">Glow color</label>
        <input type="color"
               id="glowColor"
               name="glowColor"
               value="#00FF00" />
      </div>
    </>
  );
};