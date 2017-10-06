import React from 'react';
import { Form, Control } from 'react-redux-form';

class CustomerFormAdd extends React.Component {
  handleSubmit(values) {
    let { handlerCreateCustomer } = this.props;
    // console.log(values.add);

    console.log(handlerCreateCustomer(values.add))
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

export default CustomerFormAdd;