import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InvoiceItem = ({data, keyId, event}) => (
    <tr>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>
          <input type="number" 
          defaultValue="1" 
          onChange={event.onchange.bind(null, data.id)}/>
        </td>
    </tr>
  )
  
export default InvoiceItem;