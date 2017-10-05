import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class App extends Component {
    render() {
        console.log(this)
        return (
            <div>
                Starter APP
            </div>
        );
    }
}

App.propTypes = {

};

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps)(App)