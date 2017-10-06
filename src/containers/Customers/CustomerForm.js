import React from 'react';
import { Form, Control } from 'react-redux-form';

class CustomerForm extends React.Component {
  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
        <Form 
        model="customerForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Name:</label>
          <Control.text model="customerForm.add.name" />
        </div>

        <div className="field">
          <label>Address:</label>
          <Control.text model="customerForm.add.address" />
        </div>

        <div className="field">
          <label>Phone:</label>
          <Control.text model="customerForm.add.phone" />
        </div>

        <button type="submit">
          Submit
        </button>
      </Form>
    );
  }
}

export default CustomerForm;