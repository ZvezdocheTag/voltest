import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const InvoiceItem = ({data, keyId, event}) => (
    <tr>
        <td>{keyId}</td>
        <td>{data.customer_id}</td>
        <td>{data.discount}</td>
        <td>{data.total}</td>
        <td>
            <Link to={`/invoice/${data.id}`}>
                edit
            </Link>
        </td>
    </tr>
)

export default InvoiceItem;