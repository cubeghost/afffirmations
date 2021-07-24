import React, { useState, useEffect } from "react";

import "./styles/styles.css";

import Seo from './components/seo.jsx';
import Preview from './components/Preview.jsx';

export default function Home() {
  return (
    <>
      <Seo />
      <header>
        <h1>
          afffirmations generator
        </h1>
        <p>
          inspired by <a href="https://instagram.com/afffirmations">@afffirmations</a> (that's three Fs)
        </p>
        <hr />
      </header>
      <main role="main">
        <Preview />
        <form action="#">
          <hr />
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

          <hr />

          <button id="download">
            Download
          </button>
        </form>
      </main>
      <footer classNameName="footer">
        <hr />
        <p>made by <a href="https://twitter.com/cubeghost">@cubeghost</a></p>
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Remix on Glitch
        </a>
      </footer>
    </>
  );
}
