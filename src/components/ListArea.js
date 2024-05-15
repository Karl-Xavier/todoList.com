import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function ListArea({items, deleteItem}){
    const [isDashed, setIsDashed] = useState({})

    function lineThrough(index){
        setIsDashed({...isDashed, [index]:!isDashed[index]})
    }
    
    /* function lineThrough() {
        setIsDashed(true)
      } */

  return (
    <ul className='list'>
        {items.map((item, index) => {
           return (
           <div className='list-div' key={index}>
                <input type='checkbox' onChange={() => lineThrough(index)}/>
                <li id={index} style={{textDecoration : isDashed[index] ? 'line-through' : "none"}}>{item}</li>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(index)} role='button' className='button'/>
            </div>);
        })}
    </ul>
  )
}

export default ListArea