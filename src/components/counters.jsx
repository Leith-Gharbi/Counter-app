import React, { Component } from 'react';   

import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[{id:1, value:4},
                  {id:2, value:0},
                  {id:3, value:2},
                  {id:4, value:0}]
     }
handelDelete =counterId=>{
    const counters =this.state.counters.filter( c => c.id !== counterId);
   // console.log('Event Handler Called',counterId);
   this.setState({counters :counters});
}
handelReset=() =>{
 const counters =this.state.counters.map(c =>{
     c.value=0; return c;
 });
this.setState({counters});
}
    render() { 
        return ( <div>
<button
onClick={this.handelReset}
 className="btn btn-primary btn-sm m-2">Reset</button>
        {   this.state.counters.map(counter => (
        <Counter 
        key={counter.id}
        onDelete={this.handelDelete} 
        counter={counter}>
        // value={counter.value}
        //  id={counter.id} 
    // {/* <h4>Counter #{counter.id}</h4> */}
            </Counter>))}
        </div> );
    }
}
 
export default Counters;