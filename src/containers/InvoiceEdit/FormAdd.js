import React from 'react';
import { Form, Control, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];
function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}
class InvoiceFormAdd extends React.Component {
  handleSubmit(values) {
    // let { handlerCreateInvoice, close, dispatch } = this.props;
    console.log(values)
    // handlerCreateInvoice(values.add)
    // .then(res => {
    //   close()
    //   dispatch(actions.reset('productForm.add'))
    // })
  }

  render() {
    return (
        <Form 
        model="invoiceForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Name:</label>
          <Control.text model="invoiceForm.add.discount" />
        </div>
        <div className="field">
          <label>Customer:</label>
          <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={logChange}
          />
        </div>
        <div className="field">
          <label>Add product:</label>
          <div className="field-row">
          <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={logChange}
          />
          <Button bsStyle="primary">Add</Button>
          </div>
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

export default InvoiceFormAdd;