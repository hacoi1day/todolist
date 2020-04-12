import React, { Component } from 'react'

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        };
    }

    onEdit = () => {
        console.log(this.state.task);
    }

    onDelete = () => {
        console.log(this.state.task);
    }

    render() {
        const {task} = this.props;
        return (
            <div className="_1task">
                <div className="alert alert-success" role="alert">
                    <i className="fas fa-list-ul task-icon"></i>
                    <span className="task-title">{task.title || ''}</span>
                    <div className="action">
                        <i onClick={this.onEdit} className="fas fa-pen"></i>
                        <i onClick={this.onDelete} className="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        )
    }
}
