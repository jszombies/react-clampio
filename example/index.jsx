import React from 'react';
import ReactDOM from 'react-dom';
import Clampio from '../dist';

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
`;

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

const blockStyles = {
  width: '500px',
};

const Demo = () => (
  <div style={containerStyles}>
    <div style={blockStyles}>
      <h1>Original text</h1>
      <p>{text}</p>
    </div>
    <div style={blockStyles}>
      <h1>Clamped text (2 lines by default)</h1>
      <Clampio text={text} />
    </div>
  </div>
);

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
