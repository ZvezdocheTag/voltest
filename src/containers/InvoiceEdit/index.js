import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchCustomers } from '../Customers/logic/action/fetchall'
import { fetchProducts } from '../Products/logic/action/fetchall'
import { createInvoice } from '../Invoices/logic/action/create'
import { changeInvoice  } from '../Invoices/logic/action/change'
import { fetchInvoice, resetFetchInvoice  } from '../Invoices/logic/action/fetch'
import InvoiceFormAdd from './FormAdd'


class InvoiceEdit extends PureComponent {
    componentWillMount() {
        let { 
            fetchProducts, 
            fetchCustomers, 
            fetchInvoice, 
            match 
        } = this.props;
        fetchProducts()
        fetchCustomers()
    }

    matchParamsReturn() {
        const { match } = this.props;       
        return typeof match.params.id !== "undefined" ? match.params.id : null;
    }

    render() {
        const { 
            customer,
            createInvoice,
            resetFetchInvoice,
            changeInvoice,
            product, 
            dispatch, 
            invoiceForm, 
            invoice,
            match
        } = this.props;
        const { 
            customers,
            error,
            loading
         } = customer.all;
        const { 
            products,
        } = product.all;
        const condition = !customers.length && loading;
        
        return (
            <div>
                {
                condition ?
                    <div>load</div> :
                    <InvoiceFormAdd 
                    match={this.matchParamsReturn()}
                    dispatch={dispatch}
                    customers={customers}
                    resetFetchInvoice={resetFetchInvoice}
                    products={products}
                    fetchInvoice={fetchInvoice}
                    changeInvoice={changeInvoice}
                    createInvoice={createInvoice}
                    formLiveProps={invoiceForm.add}
                    />
                }
            </div>
        );
        
    }
}

InvoiceEdit.propTypes = {
    fetchProducts: PropTypes.func,
    resetFetchInvoice: PropTypes.func,
    fetchCustomers: PropTypes.func,
    fetchInvoice: PropTypes.func,
    createInvoice: PropTypes.func,
    changeInvoice: PropTypes.func,
    dispatch: PropTypes.func,
    customer: PropTypes.object,
    product: PropTypes.object,
};

const mapStateToProps = (store) => ({...store})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        fetchProducts: () => dispatch(fetchProducts()),
        resetFetchInvoice: () => dispatch(resetFetchInvoice()),
        fetchCustomers: () => dispatch(fetchCustomers()),
        fetchInvoice: (id) => dispatch(fetchInvoice(id)),
        createInvoice: (data) => dispatch(createInvoice(data)),
        changeInvoice: (data, id) => dispatch(changeInvoice(data, id)),   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit);