import React, { useState, useEffect, useRef } from "react";

import "./styles/styles.css";

import StateProvider from './state/index.jsx';

import Meta from './components/Meta.jsx';
import Preview from './components/Preview.jsx';
import Controls from './components/Controls.jsx';
import Download from './components/Download.jsx';

export default function Home() {
  const previewRef = useRef();
    
  return (
    <StateProvider>
      <Meta />
      <header>
        <h1>
          afffirmations generator
        </h1>
      </header>
      <main role="main">
        <Preview ref={previewRef} />
        
        <form>          
          <Controls />
          <Download element={previewRef} />
        </form>
      </main>
      <footer>
        <p>
          inspired by <a href="https://instagram.com/afffirmations" target="_blank">@afffirmations</a><br />
          made by <a href="https://twitter.com/cubeghost" target="_blank">@cubeghost</a>
        </p>
        <br />
        <a
          className="btn--remix"
          target="_blank"
          href="https://github.com/cubeghost/afffirmations"
        >
          github
        </a>
      </footer>
    </StateProvider>
  );
}
