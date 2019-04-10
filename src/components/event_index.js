// @ts-nocheck
import _ from 'lodash';
import React, { Component } from 'react';
// import { getPortPromise } from 'portfinder';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

class EventIndex extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.readEvents();
  }

  renderEvents() {
    // eslint-disable-next-line react/destructuring-assignment
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tile</th>
              <th>Body</th>
             </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

// @ts-ignore
const mapStateToProps = state => ({ events: state.events });
// const mapDispatchToProps = { increment, decrement };
const mapDispatchToProps = { readEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventIndex);
