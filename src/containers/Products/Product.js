import React from 'react';
import { Button } from 'react-bootstrap'

const ProductItem = ({data, keyId, event}) => (
    <tr>
        <td>{keyId}</td>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
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

export default ProductItem;