import { Link } from 'react-router-dom';
import React from 'react';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    MenuItem, 
    NavDropdown
} from 'react-bootstrap'

class Header extends React.Component {

    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        Link
                    <NavItem eventKey={1} href="#">
                        <Link to="/invoices">Invoices</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/products">Products</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/custumers">Custumers</Link>
                    </NavItem>
                    </Nav>
                </Navbar>
            </header>
        )
    }
}