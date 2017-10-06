import React from 'react';
import { Form, Control } from 'react-redux-form';

class CustomerFormDelete extends React.Component {
  handleSubmit(values) {
    let { handlerDeleteCustomer, close } = this.props;
    handlerDeleteCustomer(this.props.itemId).then(res => {
        close()
    })
  }

  render() {
    //   console.log(this)
    return (
        <Form 
        model="customerForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div>
            You confirm that want delete item {this.props.itemId}
        </div>

        <button type="submit">
          Submit
        </button>
      </Form>
    );
  }
}

export default CustomerFormDelete;