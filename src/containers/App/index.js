import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import Header  from '../../components/Header'

import Home from '../Home'
import Customers from '../Customers'
import Products from '../Products'
import Invoices from '../Invoices'

class App extends Component {
    render() {
        let { routeReducer } = this.props.state;
        let { pathname } = routeReducer.location;
        let title = pathname !== '/' ? pathname.slice(1) : 'Home'
        console.log()
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
              </Switch>

            </Grid>
        );
    }
}

App.propTypes = {

};

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps)(App)