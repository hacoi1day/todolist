import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchTasks} from './../actions/taskAction';

import Task from './Task'

class ListTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    render() {
        const {tasks} = this.props;
        const listTask = tasks.map(task => (
            <Task key={task.id} task={task}/>
        ));

        return (
            <div className="list-task">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="title">List Task</h6>
                    </div>
                    <div className="col-md-12">
                        {listTask}
                    </div>
                </div>
            </div>
        )
    }
}

ListTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    fetchTasks: PropTypes.func,
}

const mapStateToProps = (state) => ({
    tasks: state.task.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => {
            fetch('http://localhost:80/tasks')
            .then(res => res.json())
            .then(tasks => {
                dispatch(fetchTasks(tasks));
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
