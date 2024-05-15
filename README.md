<!--   const [contact, setContact] = useState(
    {
      fName : "",
      lName : "",
      email : ""
    }
  )

  function handleChange(e){
    const {value, name} = e.target
    
    setContact(previous => {
      /* if(name === "fName"){
        return{
          fName: value,
          lName: previous.lName,
          email: previous.email
        }
      } else if(name === "lName"){
        return{
          fName: previous.fName,
          lName: value,
          email: previous.email
        }
      } else if(name === "email"){
        return{
          fName: previous.fName,
          lName: previous.lName,
          email: value
        }
      } */
      return {
        ...previous,
        [name] : value
      }
    })
    
  }

  function handleClick(e){
    e.preventDefault()
  }
  <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input 
          name='fName' 
          placeholder='First Name'
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name='lName' 
          placeholder='Last Name'
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name='email' 
          placeholder='Email'
          onChange={handleChange}
          value={contact.email}
        />
        <br/>
        <button onClick={handleClick}>Submit</button>
      </form>
    

    import React, { useState } from 'react';
import ToDoItem from './component/ToDoItem';
import InputArea from './component/InputArea';

function App() {

  const [input, setInput] = useState("")
  const [array, setArray] = useState([])


  function inputVal(e){
   const inputValue = e.target.value
    setInput(inputValue)
  }

  function handle(){
    setArray(prev => {
      return [
        ...prev, input
      ]
    })
    setInput("")
  }

  function deleteItem (id){
    setArray(prev => {
      return prev.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }

  return (
    <div className='container'>
      <h1 style={{backgroundColor: "#fff", rotate: "5deg"}}>ToDo List</h1>
      <InputArea 
        change={inputVal}
        click={handle}
        input={input}
      />
      <ul className='unodered-items'>
      {array.map((createList, index) => 
        <ToDoItem
          key={index}
          id={index}
          text={createList}
          onChecked={deleteItem}
        />
      )}
      </ul>
      
      
    </div>
  );
}

export default App;
 -->











/* const [clicked, setClicked] = useState(false)
    function through(){
         setClicked(true 
        setClicked(previous => {
            return !previous
        })
    } */






    import React, { useState } from 'react';
import ToDoItem from './component/ToDoItem';
import InputArea from './component/InputArea';

function App() {

  const [input, setInput] = useState("")
  const [array, setArray] = useState([])


  function inputVal(e){
   const inputValue = e.target.value
    setInput(inputValue)
  }

  function handle(){
    setArray(prev => {
      return [
        ...prev, input
      ]
    })
    setInput("")
  }

  function deleteItem (id){
    setArray(prev => {
      return prev.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }

  return (
    <div className='container'>
      <h1 style={{backgroundColor: "#fff", rotate: "5deg"}}>ToDo List</h1>
      <InputArea 
        change={inputVal}
        click={handle}
        input={input}
      />
      <ul className='unodered-items'>
      {array.map((createList, index) => 
        <ToDoItem
          key={index}
          id={index}
          text={createList}
          onChecked={deleteItem}
        />
      )}
      </ul>
      
      
    </div>
  );
}

export default App;
