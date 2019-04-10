// @ts-nocheck
import React, { Component } from 'react';
// import { getPortPromise } from 'portfinder';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { postEvent } from '../actions';

class EventsNew extends Component {

  render() {
    return (
      <React.Fragment>
        <div>a</div>
      </React.Fragment>
    );
  }
}

// const mapDispatchToProps = { increment, decrement };
// const mapDispatchToProps = { postEvent };

export default connect(
  null,
  null,
)(EventsNew);
