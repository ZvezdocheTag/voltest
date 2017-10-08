import React from 'react';
import { Form, Control, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TableCustom from '../../components/Table'

const InvoiceItem = ({data, keyId, event}) => (
  <tr>
      {/* <td>{data.name}</td>
      <td>{data.price}</td> */}
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>
        <input type="text"/>
      </td>
  </tr>
)

function prepareDataToSelect(data) {
  return data.map(item => 
    ({ value: item.name, label: item.name, ...item})
  )
}

class InvoiceFormAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      customerVal: '',
      productVal: ''
    }
  }

  logChangeCustomer = (val) => {
    let { dispatch } = this.props;
    dispatch(actions.change("invoiceForm.add.customer", val))
    this.setState({
      customerVal: val
    })
  }

  logChangeProduct = (val) => {
    console.log(val)
    this.setState({
      productVal: val
    })
  }

  handleSubmit(values) {
    let { dispatch } = this.props;
    console.log(values)
 
    // handlerCreateInvoice(values.add)
    // .then(res => {
    //   close()
    //   dispatch(actions.reset('productForm.add'))
    // })
  }

  addProduct = (e) => {
    // console.log(this, e.target)
    
    let { dispatch, formLiveProps } = this.props;
    let { products } = formLiveProps;
    
    let condition = false;
    for(
      let i = 0;
       i < products.length;
       i+=1) {
         if(products[i].id === this.state.productVal.id) {
          condition = true;
          break;
         }
        
    }

    if(!condition) {
      dispatch(actions.push("invoiceForm.add.products", this.state.productVal))   
    } else {
      condition = false;
    }


  }
  render() {
    let { customers, products, formLiveProps } = this.props;
    let { customerVal, productVal }  = this.state;
    let productList = formLiveProps.products
    let  { discount } = formLiveProps;

    let sum = productList.reduce((previousValue, item, index, arr) => {
      return previousValue + item.price
    }, 0)
    let total = sum - (discount/100 * sum);

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
            simpleValue
            value={customerVal}
            options={prepareDataToSelect(customers)}
            onChange={this.logChangeCustomer}
          />
        </div>
        <div className="field">
          <label>Add product:</label>
          <div className="field-row">
          <Select
            name="form-field-name"
            value={productVal}
            options={prepareDataToSelect(products)}
            onChange={this.logChangeProduct}
          />
          <Button 
          onClick={this.addProduct}
          bsStyle="primary">Add</Button>
          </div>
        </div>
        <TableCustom 
                thead={[ "Name", "Price","Qty",]}
                tbodyData={formLiveProps.products}
                Tbitem={InvoiceItem}
                update={this.update}
                deleted={this.deleted}
            />
        <h2>
          {total}
        </h2>
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