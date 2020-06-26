import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {


    render() {
        return (
            <div>
                <h3> {this.props.item.title} </h3>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TodoItem;