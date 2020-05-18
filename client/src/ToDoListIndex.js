
import React from 'react'
import reactDOM from 'react-dom'

import './ToDoList.css'
import ToDoList from './ToDoList'

var destination = document.querySelector("#container")

reactDOM.render (
    <div>
        <ToDoList />
    </div>,
    destination
)







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
