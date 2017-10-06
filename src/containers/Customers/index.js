import React, { Component } from 'react';
import TableCustom from '../../components/Table'
import ModalCustomer from '../../components/Modal'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchCustomers } from './logic/action/fetchall'
import './main.css'
import CustomerForm from './CustomerForm'

class Customers extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,

        }
    }
    componentWillMount() {
        const { fetchCustomers } = this.props;
        fetchCustomers()
    }

    close = () => this.setState({ showModal: false })
    open = () => this.setState({ showModal: true })
    
    render() {
        const { customer } = this.props;
        const { 
            customers,
            error,
            loading
         } = customer.all;
        let condition = !customers.length && loading;

        console.log(this.props, "CUSTOMERS")
        return (
            <div>
                <div className="content-header">
                    <h1>Customers</h1>
                    <Button 
                    bsStyle="primary"
                    onClick={this.open}>
                    Create</Button>
                </div>
                

                {
                    condition     ?
                    <h1>LOAD</h1> :
                    <TableCustom 
                        thead={["#", "Name", "Adress"]}
                        tbodyData={customers}
                    />
                }
                <ModalCustomer 
                    closeHandler={this.close} 
                    showModal={this.state.showModal}
                >
                    <CustomerForm />
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
        fetchCustomers: () => dispatch(fetchCustomers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customers);