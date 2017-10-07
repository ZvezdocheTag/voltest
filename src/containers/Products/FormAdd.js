import React from 'react';
import { Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap'

class CustomerFormAdd extends React.Component {
  handleSubmit(values) {
    let { handlerCreateCustomer, close } = this.props;
    handlerCreateCustomer(values.add)
    .then(res => close())
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
        <div className="field-caption">
        <Button bsStyle="primary" type="submit">
          Submit
        </Button>
        <Button 
          onClick={this.props.close}
          bsStyle="default"
        >
        Dismiss
        </Button>
      </div>
      </Form>
    );
  }
}

export default CustomerFormAdd;