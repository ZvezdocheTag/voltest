import React, { Component } from 'react';
import TableCustom from '../../components/Table'
import ModalCustomer from '../../components/Modal'
import ContentHeader from '../../components/ContentHeader'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchInvoices } from './logic/action/fetchall'
import { deleteInvoice } from './logic/action/delete'
import './main.css'
import InvoiceFormDelete from './FormDelete'
import InvoiceItem from './Invoice'

class Invoices extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            ModalContent: () => (<div></div>),
            itemId: null
        }
    }
    componentWillMount() {
        const { fetchInvoices } = this.props;
        fetchInvoices()
    }

    close = () => this.setState({ 
        showModal: false,
        ModalContent: () => (<div></div>),
        itemId: null
    })

    open = (Content, currentId) => this.setState({ 
        showModal: true,
        ModalContent: () => (
            <Content 
            close={this.close}
            itemId={currentId}
            dispatch={this.props.dispatch}
            />
        ),
        itemId: currentId || null
    })


    deleted = (id, e) => {
        this.open(InvoiceFormDelete, id)
    }
    
    render() {
        
        const { ModalContent, showModal } = this.state;
        const { invoice } = this.props;
        const { 
            invoices,
            error,
            loading
         } = invoice.all;
        let condition = !invoices.length && loading;

        console.log(invoice)
        return (
            <div>
            <div className="content-header">
                <h1>Invoices</h1>
                <Button bsStyle="default">
                    <Link to="invoice-edit">
                        create invoice
                    </Link>
                </Button>
            </div>
                {
                    condition     ?
                    <Loader /> :
                    <TableCustom 
                        thead={["#", "Customer", "Discount", "Total"]}
                        tbodyData={invoices}
                        Tbitem={InvoiceItem}
                        deleted={this.deleted}
                    />
                }
                <ModalCustomer 
                    closeHandler={this.close} 
                    showModal={showModal}
                >
                    <ModalContent/>
                </ModalCustomer >
            </div>
        );
    }
}

const mapStateToProps = (store) => ({...store})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        fetchInvoices: () => dispatch(fetchInvoices()),
        deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Invoices);