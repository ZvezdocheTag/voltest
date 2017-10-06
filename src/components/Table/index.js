import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap'

const Tbhead = ({ headItems }) => (
    <thead>
        <tr>
            {
                headItems.map((item,i) => <th key={i}>{item}</th> )
            }
        </tr>
    </thead>
)
const Tbitem = () => (
    <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
    </tr>
)

const Tbbody = () => (
    <tbody>
        <Tbitem />
    </tbody>
)

class TableCustom extends Component {
    render() {
        let { thead } = this.props;

        return (
            <Table responsive>
                <Tbhead headItems={thead}/>
                <Tbbody />
            </Table>
        );
    }
}

TableCustom.propTypes = {

};

export default TableCustom;