import React, { PureComponent  } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';


class ModalCustomer extends PureComponent  {

    render() {
        let { showModal, closeHandler } = this.props;
        return (
        <Modal show={showModal} onHide={closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
        </Modal>
        );
    }
}

Modal.propTypes = {

};

export default ModalCustomer;