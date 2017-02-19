import React, {Component} from 'react';
import {Link} from 'react-router';

class UnmountingPhase extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>Unmounting Phase</h3>
      </div>

    );
  }
}

export default UnmountingPhase;
