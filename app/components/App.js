import React from 'react';
import {Link} from 'react-router';

const App = () => {
  return (
    <div>
      <Link to='/mounting-phase'>Mounting Phase</Link><br/>
      <Link to='/updating-phase'>Updating Phase</Link><br/>
    </div>
  );
};

export default App;
