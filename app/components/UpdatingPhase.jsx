import React, {Component} from 'react';
import {Link} from 'react-router';
import IntroUpdatingPhase from './IntroUpdatingPhase';
import Number from './Number';
import NumeroPar from './NumeroPar';

class UpdatingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ number: this.state.number + 1}), 1000);
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>Updating Phase</h3>
        <Number number={this.state.number} />
        <NumeroPar number={this.state.number} />
        <IntroUpdatingPhase />
      </div>

    );
  }
}

export default UpdatingPhase;
