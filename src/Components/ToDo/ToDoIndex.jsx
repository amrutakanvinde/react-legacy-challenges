import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

export default class TodoIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskList: ""//[ 'a', 'b']
            //     {
            //     task: "",
            //     isComplete: false
            // }
        // ]
        }

        this.state = {
            inputTask: ""
          }
    }

    addTasks = () => {
        console.log(this.state);
        // if(this.state.inputTask != "" ){//&& this.state.taskList != undefined){
            console.log("HERE");

            this.setState({
                taskList: "add"
            })
            // this.setState(state => {
            //     console.log(state);
            //     // const list = state.list.push(state.inputTask);

            //     return {
            //         // list
            //     }
            // }
                // taskList: [this.state.inputTask]
                //     {
                //     task: this.state.inputTask,
                //     isComplete: false
                // }
            
            // )

            // let arr = this.setState.taskList.splice();

        // }
        this.displayResults();
    }

    displayResults = () => {
        console.log("display");
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <Input id="todoInput" onChange={e => {
                    this.setState({inputTask : e.target.value});
                }}/>
                <Button onClick={() => this.addTasks()}>Add Tasks</Button>
                
            </div>
        )
    }
}

