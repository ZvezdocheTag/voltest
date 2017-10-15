import React, {PureComponent} from 'react';
import { Form, Control } from 'react-redux-form';
import { Button } from 'react-bootstrap'

class InvoiceFormDelete extends PureComponent {
  handleSubmit(values) {
    let { handlerDeleteInvoice, close } = this.props;
    handlerDeleteInvoice(this.props.itemId)
    .then(res => close())
  }

  render() {
    return (
        <Form 
        model="productForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div>
            You confirm that want delete item {this.props.itemId}
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

export default InvoiceFormDelete;