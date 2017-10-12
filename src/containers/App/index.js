import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import Header  from '../../components/Header'
import Footer  from '../../components/Footer'

import Home from '../Home'
import Customers from '../Customers'
import Products from '../Products'
import Invoices from '../Invoices'
import InvoiceEdit from '../InvoiceEdit'
import { withRouter } from 'react-router'

class App extends Component {

    render() {

        let { routeReducer } = this.props.state;
        let { pathname } = routeReducer.location;
        let title = pathname !== '/' ? pathname.slice(1) : 'Home'
        return (
            <Grid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/products" component={Products} />
                    <Route path="/invoices" component={Invoices} />
                    <Route path="/invoice-edit" component={InvoiceEdit} />
                    <Route path="/invoice/:id" component={InvoiceEdit} />
              </Switch>
              <Footer />
            </Grid>
        );
    }
}

App.propTypes = {

};

function mapStateToProps(state) {
    return { state }
}

export default withRouter(connect(mapStateToProps)(App))