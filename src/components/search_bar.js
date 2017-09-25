import React, {Component} from 'react';

/*
// The long Way
class SearchBar extends Component{
render(){
  return <input onChange ={this.onInputChange}/> ;
}
onInputChange(event){
console.log(event.target.value);
      }
}
//End of long way..
*/
/*
// The Short Way
class SearchBar extends Component{
render(){
  return <input onChange ={event => console.log(event.target.value)}/> ;
}
}
//End of Short way..
*/
//using State
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: '' };
  };
render(){
  return (
  <div>
  <input onChange ={event => this.setState ({term: event.target.value})}/>
Value of the input : {this.state.term}
  </div>
);
}
}
//End using State

  //exporting the elemanet
export default SearchBar;
