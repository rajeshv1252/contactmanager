import React, { Component } from 'react';
 class Test extends Component {
state={
    title:"",
    body:""
}
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data =>   this.setState({title:data.title,
        body:data.body}))
    }

   
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test;
