import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        console.log(this)
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                    </Col>
                </Row>
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