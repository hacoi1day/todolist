import React, { Component } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'


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
                            <ListTask/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
