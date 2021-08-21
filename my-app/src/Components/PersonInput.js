import React, { Component } from 'react'
import axios from 'axios';

export default class PersonInput extends Component {
    
    state = {
        name:'',
    };
   
     handleChange = event =>{
         this.setState({name: event.target.value});
     }

    handleSubmt = event => {
       event.preventDefault(); 


       const user = {
           name: this.state.name,
       }
       axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(res=>{
           console.log(res);
           console.log(res.data);
       });

    };
    render() {
        return (
         <form onSubmit={this.handleSubmt}>
         <label>
         Person Name:
         <input type="text" name="name" onChange={this.handleChange}/>
         </label>

         <button type="Submit">Add</button>
         </form>
        );
    }
}



