import React from 'react';

const IntroMountingPhase = () => {
  return (
    <div>
      <ol>
        <li>Initial state and props</li>
        <ul>
          <li>get Default Props.</li>
        </ul>
        <li>Component Will Mount</li>
        <ul>
          <li>set state does not provoke re-render here.</li>
        </ul>
        <li>Render</li>
        <ul>
          <li>Do not call setState here, will provoke an infinite loop.</li>
        </ul>
        <li>Component Did Mount</li>
        <ul>
          <li>Initial DOM manipulation.</li>
        </ul>
      </ol>
    </div>
  );
};

export default IntroMountingPhase;
