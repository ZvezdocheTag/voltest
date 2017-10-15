import React from 'react';
import { Form, Control, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TableCustom from '../../components/Table'
import { Redirect } from 'react-router'
import InvoiceItem from './InvoiceItem'

class InvoiceFormAdd extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      customerVal: '',
      productVal: '',
      fireRedirect: false
    }
  }

  componentWillMount() {
    const { fetchInvoice, match } = this.props;

    if(match !== null) {
      fetchInvoice()
    }
  }
  prepareDataToSelect(data) {
    return data.map(item => 
      ({ value: item.name, label: item.name, ...item})
    )
  }

  logChangeCustomer = (val) => {
    let { dispatch } = this.props;
    dispatch(actions.change("invoiceForm.add.customer", val.id))
    this.setState({
      customerVal: val
    })
  }

  logChangeProduct = (val) => {
    this.setState({
      productVal: val
    })
  }

  handleSubmit(values) {
    let { 
      dispatch, 
      createInvoice, 
      changeInvoice,
      match,
    } = this.props;

    if(match === null) {
      createInvoice({
        total: this.total(),
        discount: values.add.discount,
        customer_id: values.add.customer,
      }).then(res => {
        this.setState({ fireRedirect: true })
        dispatch(actions.reset('invoiceForm.add'))
      })

      return;
    }

    changeInvoice({
      total: this.total(),
      discount: values.add.discount,
      customer_id: values.add.customer,
    }, match).then(res => {
      this.setState({ fireRedirect: true })
      dispatch(actions.reset('invoiceForm.add'))
    })
  }

  addProduct = (e) => {
    let { dispatch, formLiveProps } = this.props;
    let { products } = formLiveProps;
    let condition = false;

    for(let i = 0;i < products.length;i+=1) {
      if(products[i].id === this.state.productVal.id) {
        condition = true;
        break;
      }
    }

    if(!condition) {
      dispatch(actions.push("invoiceForm.add.products", {...this.state.productVal, qty: 1}))   
    } else {
      condition = false;
    }
  }

  total = () => {
    let { formLiveProps } = this.props;
    let productList = formLiveProps.products
    let  { discount } = formLiveProps;

    let sum = productList.reduce((previousValue, item, index, arr) => {
      return previousValue + (item.price * item.qty)
    }, 0)
    let total = sum - (discount/100 * sum);

    return total;
  }

  changeCountValue = (id, e) => {
    let { formLiveProps, dispatch } = this.props;
    let index = 0;
    let current = formLiveProps.products.filter((item, i) => {
      if(item.id === id) index = i
      return item.id === id
    })[0];

    dispatch(actions.change(`invoiceForm.add.products[${index}].qty`, +e.target.value)) 
  }

  componentWillUnmount() {
    this.props.resetFetchInvoice()
  }

  render() {
    let { customers, products, formLiveProps,  } = this.props;
    let { customerVal, productVal }  = this.state;
    const { from } = '/'

    return (
        <Form 
        model="invoiceForm" 
        onSubmit={(val) => this.handleSubmit(val)}>
        <div className="field">
          <label>Discount:</label>
          <Control.text model="invoiceForm.add.discount" />
        </div>
        <div className="field">
          <label>Customer:</label>
          <Select
            name="form-field-name"
            value={customerVal}
            options={this.prepareDataToSelect(customers)}
            onChange={this.logChangeCustomer}
          />
        </div>
        <div className="field">
          <label>Add product:</label>
          <div className="field-row">
          <Select
            name="form-field-name"
            value={productVal}
            options={this.prepareDataToSelect(products)}
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
          onchange={this.changeCountValue}
        />
        <h2>{this.total()}</h2>
        <div className="field-caption">
        <Button bsStyle="primary" type="submit">
          Submit
        </Button>
        <Button onClick={this.props.close} bsStyle="default">
          Dismiss
        </Button>
      </div>
      {this.state.fireRedirect && (
          <Redirect to={from || '/invoices'}/>
        )}
      </Form>
    );
  }
}

export default InvoiceFormAdd;