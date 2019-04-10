// @ts-nocheck
import React, { Component } from 'react';
// import { getPortPromise } from 'portfinder';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { deleteEvent, getEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getEvent(id);
    }
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push('/');
  }

  async onDeleteClick() {
    this.props.history.push('/');
    // console.log(this.props.match);
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
  }

  // eslint-disable-next-line class-methods-use-this
  renderField(field) {
    console.log(1);
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  render() {
    const {
 handleSubmit, pristine, submitting, invalid 
} = this.props;
    // console.log(pristine);
    // console.log(submitting);
    // console.log(invalid);
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting || invalid}
          />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            Delete
          </Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, state };
};
const mapDispatchToProps = { deleteEvent, getEvent, putEvent };

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = 'Enter a title, Please';
  if (!values.body) errors.body = 'Enter a body, Please';
  return errors;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(
    EventsShow,
  ),
);
