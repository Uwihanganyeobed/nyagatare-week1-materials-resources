import { Component } from 'react'

export class Classes extends Component {
   constructor(props){
      super(props)
      this.state ={count: 0}
      this.inCrement = this.inCrement.bind(this);
      this.deCrement = this.deCrement.bind(this);
      this.reset = this.reset.bind(this);
   }
   inCrement(){
      this.setState((state)=>({count: state.count+1}))
   }
   deCrement(){
      this.setState((state)=>({count: state.count-1}))
   }
   
   reset(){
      this.setState((state)=>({count: state.count=0}))
   }

   componentDidMount(){
      console.log("Component is mounted")
   }
   componentDidUpdate(){
      console.log("Component is updated")
   }
   componentWillUnmount(){
      console.log("Component is unmounted")
   }
  render() {
   console.log("object rendered")
    return (
      <div>
         <h1>{this.state.count}</h1>
         <button onClick={this.inCrement}>Increment</button>
         <button onClick={this.deCrement}>Decrement</button>
         <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default Classes