import React, { Component } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="container task">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title">Task Manager</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <AddTask/>
                        </div>
                        <div className="col-md-7">
                            Cupidatat ad sint culpa culpa aliqua adipisicing amet ex amet nostrud cillum. Et et excepteur qui Lorem minim cupidatat adipisicing minim quis commodo dolore est. Ad laboris officia aute adipisicing ex ullamco. Dolor aliqua aliquip sunt reprehenderit voluptate ipsum. Enim consequat eu commodo excepteur sint. Ex ipsum commodo eiusmod aliquip. Irure velit nisi id eu ut laboris voluptate laboris nulla commodo adipisicing exercitation ea do.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
