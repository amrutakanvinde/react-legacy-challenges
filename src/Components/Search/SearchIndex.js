import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }

    this.state = {
      search: ""
    }

    this.state = {
      results: []
    }
  }
 
  componentWillMount(){
    this.setState({
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    })
    this.setState({
      results: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    })
    //console.log(this.state.things)
  }

searchFunction(search) {
  // console.log(this.state.things);
  // let yes = false;
  for(let i = 0; i< this.state.things.length ; i++){
    if(this.state.search != "" && this.state.things != undefined){
      // let yes = this.state.things.includes(this.state.search);
      // let ind = this.state.things.indexOf(this.state.search);
      // // let mat = this.state.things.match(/this.state.search/gi);
      // let fil = this.state.things.filter(e => e == this.state.search)
      // // console.log(yes, ind, mat, fil);
      // console.log(this.state.things.findIndex(element => element.includes(this.state.search)));

      this.setState({
        results: this.state.things.filter(element => element.includes(search))
      });
    } else {
      this.setState({
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      })
    }
  }
}

 render() {
   return(
     <div>
       <Input placeholder='Search Here' onChange={e => { 
         this.setState({search : e.target.value}); 
         this.searchFunction(e.target.value);
         }}/>
       <h3>Results:</h3>
         <div>
         {this.state.results.map((item, index) => <li key={index}>{item}</li> )}
         </div>
     </div>
   )}
}

export default SearchIndex;
