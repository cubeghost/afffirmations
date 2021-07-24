import React, { useContext, useCallback } from "react";
import Dropzone from "react-dropzone";

import { StateContext } from "../state/index.jsx";
import { fileToDataUrl } from "../utils.js";

export default function Upload() {
  const { values, setField } = useContext(StateContext);

  const onDrop = useCallback(async (files) => {
    const url = await fileToDataUrl(files[0]);
    setField('backgroundImage', url);
  }, []);

  return (
    <Dropzone onDrop={onDrop} noClick>
      {({ getRootProps, getInputProps }) => (
        <div className="field" {...getRootProps()}>
          <label htmlFor="backgroundImage">Background</label>
          <input {...getInputProps({id: 'backgroundImage'})} />
        </div>
      )}
    </Dropzone>
  );
}
