import React, { Component } from 'react';
import TableCustom from '../../components/Table'
import ModalCustomer from '../../components/Modal'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchCustomers } from './logic/action/fetchall'
import { createCustomer } from './logic/action/create'
import { deleteCustomer } from './logic/action/delete'
import { changeCustomer } from './logic/action/change'
import './main.css'
import CustomerFormAdd from './CustomerFormAdd'
import CustomerFormDelete from './CustomerFormDelete'
import CustomerFormUpdate from './CustomerFormUpdate'
import CustomerItem from './CustomerItem'

class Customers extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            ModalContent: () => (<div></div>),
            itemId: null
        }
    }
    componentWillMount() {
        const { fetchCustomers } = this.props;
        fetchCustomers()
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
            handlerCreateCustomer={this.props.createCustomer}
            handlerDeleteCustomer={this.props.deleteCustomer}
            handlerChangeCustomer={this.props.changeCustomer}
            />
        ),
        itemId: currentId || null
    })

    create = () => {
        this.open(CustomerFormAdd)
    }
    update = (id, e) => {
        this.open(CustomerFormUpdate, id)
    }
    deleted = (id, e) => {
        this.open(CustomerFormDelete, id)
    }
    
    render() {
        const { ModalContent, itemId } = this.state;
        const { customer, createCustomer } = this.props;
        const { 
            customers,
            error,
            loading
         } = customer.all;
        let condition = !customers.length && loading;

        // console.log(this.props, "CUSTOMERS")
        return (
            <div>
                <div className="content-header">
                    <h1>Customers</h1>
                    <Button 
                    bsStyle="primary"
                    onClick={this.create}>
                    Create</Button>
                </div>
                

                {
                    condition     ?
                    <h1>LOAD</h1> :
                    <TableCustom 
                        thead={["#", "Name", "Adress"]}
                        tbodyData={customers}
                        Tbitem={CustomerItem}
                        update={this.update}
                        deleted={this.deleted}
                    />
                }
                <ModalCustomer 
                    closeHandler={this.close} 
                    showModal={this.state.showModal}
                >
                    <ModalContent
                        itemId={itemId}
                    />
                </ModalCustomer >

            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        ...store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomers: () => dispatch(fetchCustomers()),
        createCustomer: (data) => dispatch(createCustomer(data)),
        deleteCustomer: (id) => dispatch(deleteCustomer(id)),
        changeCustomer: (data, id) => dispatch(changeCustomer(data, id)),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customers);