import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InvoiceFormAdd from './FormAdd'
class InvoiceEdit extends Component {
    render() {
        return (
            <div>
                INVOICE EDIT
                <InvoiceFormAdd />
            </div>
        );
    }
}

InvoiceEdit.propTypes = {

};

export default InvoiceEdit;