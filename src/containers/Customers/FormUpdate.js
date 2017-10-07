import React from 'react';
import { Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap'

class CustomerFormUpdate extends React.Component {
  handleSubmit(values) {
    let { handlerChangeCustomer, itemId, close } = this.props;
    handlerChangeCustomer(values.change, itemId)
    .then(res => close())
  }

  render() {
    return (
        <Form 
        model="customerForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Name:</label>
          <Control.text model="customerForm.change.name" />
        </div>

        <div className="field">
          <label>Address:</label>
          <Control.text model="customerForm.change.address" />
        </div>

        <div className="field">
          <label>Phone:</label>
          <Control.text model="customerForm.change.phone" />
        </div>
        <div className="field-caption">
          <Button bsStyle="primary" type="submit">
            Submit
          </Button>
          <Button 
          onClick={this.props.close}
          bsStyle="default">
            Dismiss
          </Button>
        </div>
      </Form>
    );
  }
}

export default CustomerFormUpdate;