import React from 'react';
import { Form, Control, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap'


class ProductFormAdd extends React.PureComponent {
  handleSubmit(values) {
    let { handlerCreateProduct, close, dispatch } = this.props;
    handlerCreateProduct(values.add)
    .then(res => {
      close()
      dispatch(actions.reset('productForm.add'))
    })
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
          <label>price:</label>
          <Control.text model="productForm.add.price" />
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