
import React, { Component } from 'react'

import './ToDoList.css'
import ToDoList from './ToDoList'

export default class App extends Component {
    // constructor (props) {
    //     super (props)
    //     this.state = {
    //         ToDoListPage: []
    //     }
    // }
    // componentWillMount () {
    //     var ToDoListPage = []
    //     ToDoListPage.push(
    //         <ToDoListScreen appContext={this} key={"todolist-screen"}/>
    //     )
    //     this.setState({
    //         ToDoListPage:ToDoListPage
    //     })
    // }
    render () {
        return (
            <div>
                {this.state.ToDoList}
            </div>
        )
    }
}












// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
