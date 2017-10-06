import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap'

const Tbhead = ({ headItems }) => (
    <thead>
        <tr>
            {
                headItems.map((item,i) => <th key={i}>{item}</th>)
            }
        </tr>
    </thead>
)

const Tbitem = ({data, keyId}) => (
    <tr>
        <td>{keyId}</td>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
    </tr>
)

const Tbbody = ({items}) => (
    <tbody>
        {
            items.map((item, i) => <Tbitem key={i} keyId={i + 1} data={item}/>)
        }
    </tbody>
)

class TableCustom extends Component {
    render() {
        let { thead, tbodyData } = this.props;

        return (
            <Table responsive>
                <Tbhead headItems={thead}/>
                <Tbbody items={tbodyData}/>
            </Table>
        );
    }
}

TableCustom.propTypes = {

};

export default TableCustom;