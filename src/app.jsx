import React, { useState, useEffect, useRef } from "react";
import download from 'downloadjs';

import "./styles/styles.css";

import {svgToDataUrl} from './utils.js';
import StateProvider from './state/index.jsx';

import Meta from './components/Meta.jsx';
import Preview from './components/Preview.jsx';
import Controls from './components/Controls.jsx';
import Upload from './components/Upload.jsx';

export default function Home() {
  const previewRef = useRef();
  
  const generate = async (event) => {
    if (event) event.preventDefault();

    const preview = previewRef.current;
    const canvas = preview.querySelector('canvas');
    const svg = new XMLSerializer().serializeToString(preview.querySelector('svg'));

    const url = await svgToDataUrl(svg, canvas, 'image/png');
    
    download(url, 'afffirmation.png', 'image/png');
  };
  
  return (
    <StateProvider>
      <Meta />
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
        <Preview ref={previewRef} />
        
        <form>          
          <Upload />

          <Controls />
          
          <hr />

          <button onClick={generate} type="button">
            Download
          </button>
        </form>
      </main>
      <footer>
        <hr />
        <p>made by <a href="https://twitter.com/cubeghost">@cubeghost</a></p>
        <br />
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Remix on Glitch
        </a>
      </footer>
    </StateProvider>
  );
}
