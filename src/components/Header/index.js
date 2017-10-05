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
                        <Link to="/">Invoice app</Link>
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        <Link to="/invoices">Invoices</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/products">Products</Link>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <Link to="/customers">Custumers</Link>
                    </NavItem>
                    </Nav>
                </Navbar>
            </header>
        )
    }
}

export default Header;