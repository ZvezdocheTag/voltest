import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchCustomers } from '../Customers/logic/action/fetchall'
import { fetchProducts } from '../Products/logic/action/fetchall'
// import { createInvoice } from './logic/action/create'
// import { deleteInvoice } from './logic/action/delete'
// import { changeInvoice } from './logic/action/change'
import InvoiceFormAdd from './FormAdd'


class InvoiceEdit extends Component {
    componentWillMount() {
        let { fetchProducts, fetchCustomers } = this.props;
        fetchProducts()
        fetchCustomers()
    }
    render() {
        let { customer, product, dispatch, invoiceForm } = this.props;
        const { 
            customers,
            error,
            loading
         } = customer.all;
        const { 
            products,
         } = product.all;


        let condition = !customers.length && loading;
         
        return (
            <div>
                INVOICE EDIT
                {
                    condition ?
                        <div>load</div> :
                        <InvoiceFormAdd 
                        dispatch={dispatch}
                        customers={customers}
                        products={products}
                        formLiveProps={invoiceForm.add}
                        />
                }
            </div>
        );
        
    }
}

InvoiceEdit.propTypes = {

};

const mapStateToProps = (store) => ({...store})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCustomers: () => dispatch(fetchCustomers()),
        createInvoice: (data) => dispatch(createInvoice(data)),
        changeInvoice: (data, id) => dispatch(changeInvoice(data, id)),   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit);