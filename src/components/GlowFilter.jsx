import React, { useContext } from "react";

import { StateContext } from "../state/index.jsx";

export default function GlowFilter({ id, intensity = 30, ...props }) {
  const {
    values: { glowColor }
  } = useContext(StateContext);

  return (
    <filter id={id} width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation={intensity} />
      <feComponentTransfer>
        <feFuncA type="gamma" exponent="0.75" amplitude="1" />
      </feComponentTransfer>
      <feOffset dx="0" dy="0" result="offsetblur" />
      <feFlood floodColor={glowColor} />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
}
