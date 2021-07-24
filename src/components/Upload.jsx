import React, { useContext } from "react";
import Dropzone from 'react-dropzone';

import { StateContext } from "../state/index.jsx";

export default function Upload() {
  const { values, setField } = useContext(StateContext);

  return (
    <Dropzone>
      {({getRootProps, getInputProps}) => (
        <div className="field" {...getRootProps()}>
          <label htmlFor="backgroundImage">Background</label>
          <input
            type="file"
            accept="image/*"
            id="backgroundImage"
            name="backgroundImage"
            {...getInputProps()}
          />
        </div>
      )}
    </Dropzone>
  );
};
