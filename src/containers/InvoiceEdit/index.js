import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchCustomers } from '../Customers/logic/action/fetchall'
import { fetchProducts } from '../Products/logic/action/fetchall'
import { createInvoice } from '../Invoices/logic/action/create'
import { fetchInvoice } from '../Invoices/logic/action/fetch'
// import { createInvoice } from './logic/action/create'
// import { deleteInvoice } from './logic/action/delete'
// import { changeInvoice } from './logic/action/change'
import InvoiceFormAdd from './FormAdd'


class InvoiceEdit extends Component {
    componentWillMount() {
        let { 
            fetchProducts, 
            fetchCustomers, 
            fetchInvoice, 
            match 
        } = this.props;
        fetchProducts()
        fetchCustomers()
  
        if(typeof match.params.id !== "undefined") {
            fetchInvoice(match.params.id)
        }

    }
    render() {
        let { 
            customer,
            createInvoice,
            product, 
            dispatch, 
            invoiceForm, 
            invoice 
        } = this.props;
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
                        defaultFields={invoice.single.invoice}
                        products={products}
                        createInvoice={createInvoice}
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
        fetchInvoice: (id) => dispatch(fetchInvoice(id)),
        createInvoice: (data) => dispatch(createInvoice(data)),
        changeInvoice: (data, id) => dispatch(changeInvoice(data, id)),   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit);