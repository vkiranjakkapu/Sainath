import React from 'react';
// import logo from './logo.ico';
import './App.css';
// import {BrowserRouter, Route} from 'react-router-dom';
import Package from './data.json';
// import Details from './details';

class App extends React.Component
{
  // constructor() {
  //   super();
  //   this.Data={
  //     name: "Venkata Kiran",
  //     age: 19
  //   }
  // }

  // increase=()=>{
  //   this.setState({
  //     age:this.Data.age+1
  //   })
  // }
  // decrease=()=>{
  //   this.setState({
  //     age:this.Data.age-1
  //   })
  // }
  render() {
    const pack = Package.data;
    return (
      <div>
        {pack.map((i,j)=>(
          <div key={j}>
            <div>{i.Details.name}</div>
            <div>{i.Details.email}</div>
            <div>{i.education[j].Degree}</div>
            <div>{i.education[j].clg}</div><br></br>
          </div>
          // <div key={j}>{i.education[j].Degree}</div>
        ))}
      </div>
    )
  }
}

// let Det=()=>{
//   return(
//     <Details></Details>
//   )
// }

export default App;
