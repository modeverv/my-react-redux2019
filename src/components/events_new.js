// @ts-nocheck
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
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
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth
      />
    );
  }

  render() {
    const {
 handleSubmit, pristine, submitting, invalid 
} = this.props;
    const style = { margin: 12 };
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
        <RaisedButton
          label="Submit"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        />
        <RaisedButton
          label="Cancel"
          style={style}
          contentElement={<Link to="/" />}
        />
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
