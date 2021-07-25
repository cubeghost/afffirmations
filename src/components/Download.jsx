import React, { useCallback } from "react";
import download from "downloadjs";

import { svgToDataUrl } from "../utils.js";

const Download = ({ element }) => {
  const handleClick = useCallback(
    async event => {
      if (event) event.preventDefault();
  
      const preview = element.current;
      const canvas = preview.querySelector("canvas");
      const svg = new XMLSerializer().serializeToString(
        preview.querySelector("svg")
      );

      const url = await svgToDataUrl(svg, canvas, "image/png");

      download(url, "afffirmation.png", "image/png");
    },
    [element]
  );

  return (
    <button onClick={handleClick} type="button">
      Download
    </button>
  );
};

export default Download;
