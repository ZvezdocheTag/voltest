import React, { Component } from 'react';
import TableCustom from '../../components/Table'

class Customers extends Component {
    render() {
        return (
            <div>
                <h1>
                Customers
                </h1>
                <TableCustom 
                    thead={["#", "Name", "Price"]}
                />
            </div>
        );
    }
}

export default Customers;