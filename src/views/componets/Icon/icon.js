import React from 'react';

export default (props) => (
  <svg width={props.width} height={props.height}>
    <path d={props.icon}></path>
  </svg>
);