
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Redirect, withRouter } from 'react-router'
import {history} from './ToDoList'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'

import UploadPage from './UploadPage'
import ToDoList from './ToDoList'

const style = {
    margin: 15
}

export default class Login extends Component {
    constructor (props) {
        super (props)
        
        this.state = {
            userId: '',
            password: '',
            loginComponent: localloginComponent
            
        }
        // this.handleClick = this.handleClick.bind(this)
        //  contextType = {
        //     router = PropTypes.object
        // }
        var localloginComponent = []
        localloginComponent.push(
            <MuiThemeProvider key={"theme"}>
                <div>
                    <TextField
                        hintText="Enter your user Id" 
                        floatingLabelText="User Id" 
                        onChange = {(event,newValue) => this.setState({userId:newValue})}
                    />
                    <br/>
                    <TextField 
                        type="password"
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton 
                        label="Submit"
                        primary={true}
                        style={style}
                        onClick={(event) => this.handleClick(event)}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
    // static contextTypes = {
    //     router: PropTypes.object,
    //   }
    componentWillMount = () => {
        console.log("willmount prop values", this.props)
        console.log("in user componentWillMount")
        var localloginComponent = []
        localloginComponent.push(
            <MuiThemeProvider>
                <div>
                    <TextField 
                        hintText="Enter your User Id"
                        floatingLabelText="User Id"
                        onChange={(event, newValue) => this.setState({userId:newValue})}
                    />
                    <br/>
                    <TextField 
                        type="password"
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        style={style}
                        onClick={(event) => this.handleClick(event)}
                    />
                </div>
            </MuiThemeProvider>
        )
        this.setState({loginComponent:localloginComponent})
    }

    componentWillReceiveProps (nextProps) {
        console.log('nextProps', nextProps)
    }

    handleClick = event => {
        event.preventDefault()
        const loginData = {
            userName: this.state.userId,
            password: this.state.password
        }
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        fetch('http://localhost:7000/users/login', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(loginData) 
        }).then((res) => res.json())
        .then((data) => {
            window.localStorage.setItem('userDetail', JSON.stringify(data))
            var userDetail = JSON.parse( window.localStorage.getItem('userDetail'))
            fetch(`http://localhost:7000/users/${userDetail._id}`)
            .then((res) => {
                if (res.status === 200) {
                    res.json().then(res => {
                    const curData = res
                    console.log(curData)
                    window.localStorage.setItem('curData', JSON.stringify(curData))
                    JSON.parse( window.localStorage.getItem('curData'))
                    console.log(curData)
                    if (curData.length !== 0) {
                        var ToDoListScreen = []
                        ToDoListScreen.push(
                            <ToDoList appContext={this.props.appContext} />
                        )
                        this.props.appContext.setState({loginPage:[],ToDoListScreen:ToDoListScreen})
                    } else {
                        window.location.href = 'index.html'
                    }
                })
                } else {
                    alert('Username/Password invalid || Error loading Records.')
                }
            })
        }).catch((err) => {
            console.log(err)
            window.alert('Username/Password invalid')
        })
    }

    render () {
        console.log('props', this.props)
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Login" />
                </MuiThemeProvider>
                {this.state.loginComponent}
            </div>
        )
    }
}



        
        












// import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'
// import DropDownMenu from 'material-ui/DropDownMenu'
// import MenuItem from 'material-ui/MenuItem'
// import axios from 'axios'

// import UploadPage from './UploadPage'

// var apiBaseUrl = "http://localhost:7000/"

// const style = {
//     margin: 15
// }

// export default class Login extends Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             userId: '',
//             password: '',
//             loginComponent: localloginComponent
//         }
//         var localloginComponent = []
//         localloginComponent.push(
//             <MuiThemeProvider key={"theme"}>
//                 <div>
//                     <TextField
//                         hintText="Enter your user Id"
//                         floatingLabelText="User Id"
//                         onChange = {(event,newValue) => this.setState({userId:newValue})}
//                     />
//                     <br/>
//                     <TextField 
//                         type="password"
//                         hintText="Enter your password"
//                         floatingLabelText="Password"
//                         onChange = {(event,newValue) => this.setState({password:newValue})}
//                     />
//                     <br/>
//                     <RaisedButton 
//                         label="Submit"
//                         primary={true}
//                         style={style}
//                         onClick={(event) => this.handleClick(event)}
//                     />
//                 </div>
//             </MuiThemeProvider>
//         )
//     }
//     componentWillMount = () => {
//         console.log("willmount prop values",this.props)
//         console.log("in user componentWillMount")
//         var localloginComponent = []
//         localloginComponent.push(
//             <MuiThemeProvider>
//                 <div>
//                     <TextField 
//                         hintText="Enter your User Id"
//                         floatingLabelText="User Id"
//                         onChange={(event, newValue) => this.setState({userId:newValue})}
//                     />
//                     <br/>
//                     <TextField 
//                         type="password"
//                         hintText="Enter your password"
//                         floatingLabelText="Password"
//                         onChange = {(event,newValue) => this.setState({password:newValue})}
//                     />
//                     <br/>
//                     <RaisedButton
//                         label="Submit"
//                         primary={true}
//                         style={style}
//                         onClick={(event) => this.handleClick(event)}
//                     />
//                 </div>
//             </MuiThemeProvider>
//         )
//         this.setState({loginComponent:localloginComponent})
//     }
//     handleClick = event => {
//         var self = this
//         var payload = {
//             "userId": this.state.userId,
//             "password": this.state.password
//         }
//         axios.post(apiBaseUrl + payload)
//         .then(response => {
//             console.log(response)
//             if (response.data.code == 200) {
//                 console.log("Login Successful")
//                 var uploadScreen = []
//                 uploadScreen.push(
//                     <UploadPage 
//                         appContext={self.props.appContext}
//                     />
//                 )
//                 self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//             } else if (response.data.code == 204) {
//                 console.log("Username or password do not match")
//                 alert(response.data.success)
//             } else {
//                 console.log("Username does not exist")
//                 alert("Username does not exist")
//             }
//         }).catch(error => {
//             console.log("error", error)
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <MuiThemeProvider>
//                     <AppBar
//                         title="Login"
//                     />
//                 </MuiThemeProvider>
//                 {this.state.loginComponent}
//             </div>
//         )
//     }
// }
