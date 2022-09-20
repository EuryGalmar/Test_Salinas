import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { AddEmployee } from './AddEmploye'



export const Employees = () => {

  const [ state, setState ] = useState(null);
  const [users, setUser] = useState ([])

  const URL = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/'
  const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUser(data)
  }

  

  useEffect(()=>{
    showData()
  }, [])

  const columns = [
    {
      name: 'Name',
      selector: row => row.name
    },
    {
      name:'LastName',
      selector: row => row.lastname
    },
    {
      name:'Nacimiento',
      selector: row => row.nacimiento
    }
  ]  


  return (
    <div className="App">
      <h1>Tabla de Empleado</h1>
     <DataTable 
      columns={columns}
      data={users}
      pagination
     />

     
     <button onClick={() =>  setState(  !state )  }>Agregar</button>
        {
          state && <AddEmployee/>
        }
     
    </div>
  )
}
