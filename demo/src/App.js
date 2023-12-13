import { useState } from 'react';
import './App.css';
import Demo1 from './Demo1';


function App() {
  //js code 
  // state creation
  const [user,setUser]=useState("Anu")

  //function with out argument
  function changeData(){
    setUser("arun")
  }

    //function with out argument
  function changeUnknon(data){
    setUser(data)
  }

  //event with target value 
  function changeInput(e){
    setUser(e.target.value);
  }

  return (
    <div className="App">
      <h1 id='d'>My first react app {user} </h1>
      <button onClick={changeData}>change</button> 
      <button onClick={()=>changeUnknon("unknown")}>change as unknown</button>
      <input onChange={(e)=>changeInput(e)} type="text" placeholder='enter name' />
      <p style={{color:'green',backgroundColor:'yellow'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga in rem mollitia, error repudiandae cumque obcaecati illo deserunt quaerat a et voluptate dolores rerum reiciendis voluptatum porro non minus.</p>
      <Demo1 data={user} data1={100}></Demo1>
    </div>
  );
}

export default  App;
