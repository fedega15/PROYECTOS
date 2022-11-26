import { useState } from 'react'
import SearchBar from './components/searchBar'
import styled from "styled-components"

const DivElejiste= styled.div`
position:relative;
width:300px;
left:100px

`

const Button = styled.button`
  margin-left:20px;
  width:100px;
  padding:5px;
  border-radius:5px;
  border:none;
  background-color:white;
  border: solid 4px blue;
  cursor: pointer;
  color: red;

  &:hover{
    background-color:#efefs;
  }
`

const people = [
  {
    id:"people-01",
    title:"juan Perez"
  },
  {
    id:"people-02",
    title:"roberto ramos"
  },
  {
    id:"people-03",
    title:"lucas ragolia"
  },
  {
    id:"people-04",
    title:"franco gonzales"
  },
  {
    id:"people-05",
    title:"sesion de seguimiento"
  }
]
const calendar = [
  {
    id:"calendar-01",
    title:"revision de propuestas"
  },
  {
    id:"calendar-02",
    title:"evento para donar "
  },
  {
    id:"calendar-03",
    title:"junta semanal"
  },
  {
    id:"calendar-04",
    title:"requisitos para cambio"
  },
  {
    id:"calendar-05",
    title:"reporte de resultados"
  }
]
const emails = [
  {
    id:"email-01",
    title:"revision de propuestas"
  },
  {
    id:"email-02",
    title:"estatus de func "
  },
  {
    id:"email-03",
    title:"revision de cheques"
  },
  {
    id:"email-04",
    title:"reunion con socios"
  },
  {
    id:"email-05",
    title:"proximos eventos"
  }
]


function App() {
  const [data, setData] = useState ([... people, ...calendar, ...emails])

  const [selection, setSelection] = useState (null)

  const [currentOption, setCurrentOption] = useState("all")

  const [count, setCount] = useState(0)

  function handleClick (e) {
    const op = e.target.name

    switch(op){
      case "all":
        setData([... people, ...calendar,...emails])
        setCurrentOption("all")
      break
      case "people":
        setData([... people])
        setCurrentOption("people")
      break  
      case "calendar":
        setData([...calendar])
        setCurrentOption("calendar")
      break
      case "emails":
        setData([...emails])
        setCurrentOption("emails")
      break
  
        default:
    }
  }
    function handleItemSelected (item) {
      setSelection(item)

    }
  
  
  return ( 
    <div  >
      <Button onClick={handleClick} name="all">
        All</Button>
      <Button onClick={handleClick} name="people">
        People</Button>
      <Button onClick={handleClick} name="calendar">
        Calendar</Button>
      <Button onClick={handleClick} name="emails">
        Emails</Button>
      <Button onClick={() => setCount (count + 1)}>{count}</Button>
      {selection ? <DivElejiste> Elejiste:  {selection.title}</DivElejiste> : ''}
      <SearchBar items={data} onItemSelected= {handleItemSelected}/>
      
    </div>
  )
}

export default App
