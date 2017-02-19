import React, {Component, PropTypes} from 'react';

class Number extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Numero: {this.props.number}</p>
      </div>
    );
  }
}

Number.propTypes = {
  number: PropTypes.number
};

export default Number;
