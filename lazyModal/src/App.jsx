
import { useState } from 'react'
import Modal from './componentws/modal'



function App() {

  const [ isOpen, setIsOpen] = useState(true)
  
 function handleOpenModal () {

}

  return (
    
    <div className='App'> 
      <button onClick={handleOpenModal}>Abrir modal</button>
      {isOpen ? (<Modal>hola</Modal>)  : null}
    </div>
   
  )
}

export default App
