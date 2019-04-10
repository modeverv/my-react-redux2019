// @ts-nocheck
import React, { Component } from 'react';
// import { getPortPromise } from 'portfinder';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { postEvent } from '../actions';


class EventsNew extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  // eslint-disable-next-line class-methods-use-this
  renderField(field) {
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
    const { handleSubmit, pristine, submitting, invalid } = this.props;
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
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

// const mapDispatchToProps = { increment, decrement };
const mapDispatchToProps = { postEvent };

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = 'Enter a title, Please';
  if (!values.body) errors.body = 'Enter a body, Please';
  return errors;
};

export default connect(
  null,
  mapDispatchToProps,
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew));