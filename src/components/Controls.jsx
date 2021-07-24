import React from "react";

import useFields from "../state/index.js";

export default function Controls() {
  const [values, setField] = useFields();

  return (
          <div className="field">
            <label for="field-backgroundImage">Background</label>
            <input type="file"
                   accept="image/*"
                   id="field-backgroundImage" />        
          </div>

          <fieldset id="fieldset-topText">
            <legend>
              Top text
            </legend>
            <div className="field">
              <label for="field-topText">Text</label>
              <input type="text"
                     id="field-topText"
                     value="Top text" />        
            </div>
            <div className="field">
              <label for="field-topTextSize">Size</label>
              <input type="range"
                     min="5"
                     max="30"
                     id="field-topTextSize"
                     value="15" />        
            </div>
            <div className="field">
              <label for="field-topTextSquish">Squish</label>
              <input type="range"
                     min="-50"
                     max="95"
                     id="field-topTextSquish"
                     value="10" />    
              <input type="number"
                     inputmode="numeric"
                     value="10" />
            </div>
          </fieldset>

          <fieldset id="fieldset-bottomText">
            <legend>
              Bottom text
            </legend>
            <div className="field">
              <label for="field-bottomText">Text</label>
              <input type="text"
                     id="field-bottomText"
                     value="Bottom text" />        
            </div>
            <div className="field">
              <label for="field-bottomTextSize">Size</label>
              <input type="range"
                     min="5"
                     max="30"
                     id="field-bottomTextSize"
                     value="15" />      
            </div>
            <div className="field">
              <label for="field-bottomTextSquish">Squish</label>
              <input type="range"
                     min="-50"
                     max="95"
                     id="field-bottomTextSquish"
                     value="10" />        
            </div>
          </fieldset>

          <div className="field">
            <label for="field-textColor">Text color</label>
            <input type="color"
                   id="field-textColor"
                   value="#FFFFFF" />
          </div>

          <div className="field">
            <label for="field-glowColor">Glow color</label>
            <input type="color"
                   id="field-glowColor"
                   value="#00FF00" />
          </div>
  );
};