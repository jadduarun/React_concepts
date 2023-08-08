import React from 'react'
import { useState } from 'react';

const BUTTON_DATA = ["Red","Blue","Green","Yellow","Black","Violet"]

function Toggle() {
    const [isActive, setIsActive] = useState("");

    function changeColor(item){
        setIsActive(item)
    }
    
  return (
    <div>
        {BUTTON_DATA.map((item,index) => {
            return (
                <button onClick={() => changeColor(item)} key={index}>{item}</button>
            )
        })}
        <div 
        style={{
          backgroundColor: isActive
        }}
        className='div'></div>
    </div>
  )
}

export default Toggle