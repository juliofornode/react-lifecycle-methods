import React, {Component, PropTypes} from 'react';

class NumeroPar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      par: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.number % 2 === 0) {
      this.setState({ par: true });
    } else {
      this.setState({ par: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.number < 10) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('NumeroPar is rendering');
    return (
      <div>
        {!this.state.par
          ? <div style={{backgroundColor: 'red', width: '100px'}}>No es par</div>
        : <div style={{backgroundColor: 'green', width: '100px'}}>Es par</div>}
      </div>
    );
  }
}

NumeroPar.propTypes = {
  number: PropTypes.number
};

export default NumeroPar;
