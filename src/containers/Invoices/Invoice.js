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
            <Button 
            bsStyle="default"
            onClick={event.deleted.bind(null, data.id)} 
            >Delete</Button>
        </td>
    </tr>
)

export default InvoiceItem;