import React, { Component } from 'react'
import Task from './Task'

export default class ListTask extends Component {
    render() {
        return (
            <div className="list-task">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="title">List Task</h6>
                    </div>
                    <div className="col-md-12">
                        <Task/>
                    </div>
                </div>
            </div>
        )
    }
}
