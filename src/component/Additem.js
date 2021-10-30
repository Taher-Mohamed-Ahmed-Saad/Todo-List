import React, { Component } from 'react'

export default class Additem extends Component {

    addItem = this.props.addItem

    state ={
        task : "",
        time : ""
    }

    handleSubmit = (e) =>{

        e.preventDefault() ;
        this.props.addItem(this.state);
        this.setState({
            task : "",
            time : ""
        })

    }

    handleChange = (e) => {

        
        this.setState({
            [e.target.id] : e.target.value 
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Enter task" id="task" onChange={this.handleChange} value={this.state.task} />
                    <input type="text" placeholder="time" id="time" onChange={this.handleChange} value={this.state.time} />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

