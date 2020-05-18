
import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import './ToDoList.css'
import ToDoItems from './ToDoItems'
// var history = require("history").createBrowserHistory
// import createHistory from 'history/createBrowserHistory';
// export const history = createHistory()

export default class ToDoList extends Component {
    constructor (props) {
        super (props)
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    addItem = e => {
        if (this._inputElement.value !== '') {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })
            this._inputElement.value = ''
        }
        console.log(this.state.items)
        e.preventDefault()
    }
    deleteItem = key => {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
          })
         
          this.setState({
            items: filteredItems
          })
    }
    render () {
        debugger
        return (
            <div className='todoListMain' key='todolistmain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a} 
                                placeholder='enter task'/>
                        <button type='submit'>Add</button>
                    </form>
                </div>
                <ToDoItems  entries={this.state.items}
                            delete={this.deleteItem} />
            </div>   
        )
    }
}