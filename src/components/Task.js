import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <div className="_1task">
                <div className="alert alert-success" role="alert">
                    <i className="fas fa-list-ul task-icon"></i>
                    <span className="task-title">Task 1</span>
                    <div className="action">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        )
    }
}
