import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {newTask} from './../actions/taskAction';
class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: 0,
        };
    }
    
    onChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {title, description, status} = this.state;
        const task = {
            title: title,
            description: description,
            status: parseInt(status)
        };
        fetch('http://localhost:80/tasks', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(task)
        }).then(res => res.json())
        .then(task => {
            this.props.newTask(task);
        });
    }

    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.onChange} value={this.state.title || ''} type="text" className="form-control" id="title" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea onChange={this.onChange} value={this.state.description || ''} className="form-control" id="description" name="description" rows={3} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select onChange={this.onChange} value={this.state.status} className="form-control" id="status" name="status">
                            <option value="0">Pending</option>
                            <option value="1">Process</option>
                            <option value="2">Done</option>
                            <option value="3">Cancel</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Add Task</button>
                </form>
            </div>
        )
    }
}

AddTask.propTypes = {
    newTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    newTask: (task) => {
        dispatch(newTask(task));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
