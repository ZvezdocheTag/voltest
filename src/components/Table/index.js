import React, { PureComponent  } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap'

const Tbhead = ({ headItems }) => (
    <thead>
        <tr>
            {
                headItems.map((item,i) => <th key={i}>{item}</th>)
            }
        </tr>
    </thead>
)

const Tbbody = ({items, Tbitem, event}) => (
    <tbody>
        {
            items.map((item, i) => 
                <Tbitem 
                key={i} 
                keyId={i + 1} 
                data={item}
                event={event}
                />)
        }
    </tbody>
)

class TableCustom extends PureComponent  {
    render() {
        let { 
            thead, 
            tbodyData, 
            Tbitem,
            update,
            deleted,
            onchange
        } = this.props;

        return (
            <Table responsive>
                <Tbhead headItems={thead}/>
                <Tbbody 
                    items={tbodyData}
                    Tbitem={Tbitem}
                    event={{update, deleted, onchange}}
                />
            </Table>
        );
    }
}

TableCustom.propTypes = {

};

export default TableCustom;