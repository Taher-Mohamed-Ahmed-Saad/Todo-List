import React, { Component } from 'react'
import Additem from './component/Additem';
import Todoitems from './component/Todoitems';
import "./App.css"

class App extends Component {

  state = {
    list:[
      {id:1 , task: "Math lecture" , time:"2 hours"},
      {id:2 , task: "Physics sheet" ,  time:"50 min"},
      {id:3 , task: "Project Phase 1" ,  time:"8 days"}
    ]
  }

  DeleteItem = (id) => {

    let items = this.state.list.filter(item => {
      return item.id !== id
    })
    
    this.setState({ list : items })

  }

  addItem = (item) =>{

    item.id =Math.random();
    let items = this.state.list;
    items.push(item);
    this.setState({list:items})

  }

  
  render() {
    return (
      <div className="container">
        <h1 className="text-center color-white"> Todo List </h1>
        <Todoitems items={this.state.list} DeleteItem={this.DeleteItem } />
        <Additem addItem={this.addItem} />
        
      </div>
    )
  }
}

export default App;
