import React, { Component } from 'react'

export default class AddTask extends Component {
    render() {
        return (
            <div className="add-task">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description" rows={3} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" id="status" name="status">
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
