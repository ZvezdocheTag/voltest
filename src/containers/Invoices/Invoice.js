import React from 'react';
import { Button } from 'react-bootstrap'

const InvoiceItem = ({data, keyId, event}) => (
    <tr>
        <td>{keyId}</td>
        <td>{data.customer_id}</td>
        <td>{data.discount}</td>
        <td>{data.total}</td>
        <td>
        </td>
    </tr>
)

export default InvoiceItem;