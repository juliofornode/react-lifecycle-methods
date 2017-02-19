import React from 'react';

const IntroUpdatingPhase = () => {
  return (
    <div>
      <p><strong>Befort Updating</strong></p>
      <p>1. Component Will Receive Props (nextProps)</p>
      <ul>
        <li>next props vs. current props</li>
      </ul>
      <p>2. Should Component Update (nextProps, nextState)</p>
      <ul>
        <li>Return true or false: to render or not to render.</li>
        <li>The next three methods only run if this returns true.</li>
      </ul>
      <p>3. Component Will Update</p>

      <p><strong>Rendering</strong></p>
      <p>4. Render method</p>
      <ul>
        <li>Only method that belongs to two phases: mounting and updating.</li>
      </ul>

      <p><strong>After rendering</strong></p>
      <p>5. Component Did Update</p>
    </div>
  );
};

export default IntroUpdatingPhase;
