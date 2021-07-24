import React, { useState, useEffect } from "react";

import "./styles/styles.css";

import Seo from './components/seo.jsx';
import Preview from './components/Preview.jsx';
import Controls from './components/Controls.jsx';

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

          <Controls />
          
          <hr />

          <button id="download">
            Download
          </button>
        </form>
      </main>
      <footer>
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
