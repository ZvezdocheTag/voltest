import React from 'react';
import { Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap'

class ProductFormAdd extends React.Component {
  handleSubmit(values) {
    let { handlerCreateProduct, close } = this.props;
    handlerCreateProduct(values.add)
    .then(res => close())
  }

  render() {
    return (
        <Form 
        model="productForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Name:</label>
          <Control.text model="productForm.add.name" />
        </div>
        <div className="field">
          <label>Address:</label>
          <Control.text model="productForm.add.address" />
        </div>

        <div className="field">
          <label>Phone:</label>
          <Control.text model="productForm.add.phone" />
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

export default ProductFormAdd;