import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

class ContentHeader extends Component {
    render() {
        return (
            <div className="content-header">
                    <h1>{this.props.title}</h1>
                    <Button 
                        bsStyle="primary"
                        onClick={this.props.func}
                    >
                    Create
                    </Button>
            </div>
        );
    }
}

ContentHeader.propTypes = {

};

export default ContentHeader;