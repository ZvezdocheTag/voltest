import React from 'react';
import { Form, Control, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap'

class ProductFormUpdate extends React.Component {
  handleSubmit(values) {
    let { handlerChangeProduct, itemId, close, dispatch } = this.props;
    handlerChangeProduct(values.change, itemId)
    .then(res => {

      close()
      dispatch(actions.reset('productForm.change'))
    }
  
  )
  }

  render() {
    return (
        <Form 
        model="productForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Name:</label>
          <Control.text model="productForm.change.name" />
        </div>

        <div className="field">
          <label>Address:</label>
          <Control.text model="productForm.change.price" />
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

export default ProductFormUpdate;