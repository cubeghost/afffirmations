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
    <Dropzone onDrop={onDrop} noClick multiple={false}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`dropzone ${isDragActive && 'dropzone--active'}`}>
          <label htmlFor="backgroundImage">
            <span>Click or drag to upload background</span>
          </label>
          <input {...getInputProps({id: 'backgroundImage'})} />
        </div>
      )}
    </Dropzone>
  );
}
