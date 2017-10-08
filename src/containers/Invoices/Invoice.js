import React from 'react';
import { Button } from 'react-bootstrap'

const InvoiceItem = ({data, keyId, event}) => (
    <tr>
        <td>{keyId}</td>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>
        <Button 
            bsStyle="primary"
             onClick={event.update.bind(null, data.id)} 
            >
            Update</Button>
        <Button 
            bsStyle="default"
            onClick={event.deleted.bind(null, data.id)} 
            >
            Delete</Button>
        </td>
    </tr>
)

export default InvoiceItem;