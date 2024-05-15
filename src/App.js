import React, {useState} from 'react'
import InputArea from './components/InputArea';
import ListArea from './components/ListArea';
import Footer from './components/Footer';

function App(){

  const [items, setItems] = useState([])


  function addItem(item){
    setItems(prev => [...prev, item])
  }

/*   function handleDelete(index){
    setItems(previous => {
      return previous.filter((item, index) => {
        return index !== id
      })
    })
  } */

  
    function handleDelete(index){
      const updatedItem = [...items]
      updatedItem.splice(index, 1)
      setItems(updatedItem)
    }
 

  return (
    <div className='container'>
      <h1 className='header'>Todo List</h1>
      <div className='form'>
        <InputArea
          addItem={addItem}
        />
        <ListArea
          items={items}
          deleteItem={handleDelete}
        />
      </div>
      <Footer/>
    </div>
  );
}
export default App;