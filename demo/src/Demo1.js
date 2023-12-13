import React from 'react'
//rfce
import './Demo1.css'
import Demo2 from './Demo2'
// props={data:user}

function Demo1(props) {
  return (
    <>
    <h1>The shared data is {props.data} {props.data1}</h1>
        <h1>hi</h1>
        <Demo2></Demo2>
        
      
        <h1>hello</h1>

        <h1>hi</h1>
      
      <h1>hello</h1>

      <h1>hi</h1>
      
      <h1>hello</h1>

    </>
  )
}

export default  Demo1