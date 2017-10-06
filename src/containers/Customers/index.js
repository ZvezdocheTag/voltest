import React, { Component } from 'react';
import TableCustom from '../../components/Table'
import { connect } from 'react-redux'
import { fetchCustomers } from './logic/action/fetchall'

class Customers extends Component {
    componentWillMount() {
        const { fetchCustomers } = this.props;
        fetchCustomers()
    }

    render() {
        const { customer } = this.props;
        const { 
            customers,
            error,
            loading
         } = customer.all;
        let condition = !customers.length && loading;

        console.log(customers, "CUSTOMERS")
        return (
            <div>
                <div>
                    <h1>Customers</h1>
                    <button>create</button>
                </div>
                {
                    condition     ?
                    <h1>LOAD</h1> :
                    <TableCustom 
                        thead={["#", "Name", "Adress"]}
                        tbodyData={customers}
                    />
                }
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