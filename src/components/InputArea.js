import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function InputArea({ addItem }){
    const [input, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

   

    function onAddItem(){
        if(document.querySelector("input").value === ""){
            alert("Cannot Add Empty Value")
        } else {
            addItem(input)
            setInput("")
        }

    }
  return (
    <div className="input-box">
        <input
            onChange={handleChange}
            value={input}
        />
        <FontAwesomeIcon icon={faPlusCircle} role='button' className='button' onClick={onAddItem}/>
    </div>
  )
}

export default InputArea