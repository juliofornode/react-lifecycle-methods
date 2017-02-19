import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import IntroMountingPhase from './IntroMountingPhase';

class MountingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Julio',
      timer: 0
    };
    console.log('1.constructor: initial state');
  }

  componentWillMount() {
    console.log('2. componentWillMount: change state without re-rendering');
    this.setState({
      nombre: 'Manolo'
    });
  }

  render() {
    console.log('3. render function');
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>Mounting Phase</h3>
        <p>Chrono: {this.state.timer}</p>
        <p>Nombre: {this.state.nombre}</p>
        <p>Apellido: {this.props.apellido}</p>
        <IntroMountingPhase />
      </div>
    );
  }

  componentDidMount() {
    console.log('4.componentDidMount: modify DOM elements');
    setInterval(() => this.setState({ timer: this.state.timer + 1}), 1000);
  }

}

MountingPhase.propTypes = {
  apellido: PropTypes.string
};

MountingPhase.defaultProps = {
  apellido: 'Colomer'
};

export default MountingPhase;
