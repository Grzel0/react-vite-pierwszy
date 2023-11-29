import './App.css'
import ProductForm from './ProductForm'
import Dog from './Dog'
import Child from './Child'
import Welcome from './Welcome'
import { useState } from 'react'
import MyCard from './MyCard'
import MyDate from './MyDate'

function App() {
  // const [dataFromChild, setdataFromChild] = useState()
  const [start, setStart] = useState(false)
  return (
    <>
    {
      !start && <MyCard>
        <Welcome startOnClick={setStart} />
        </MyCard>      
    }
    {
      start && <MyCard><MyDate /></MyCard>
    }
    </>
  )
}

export default App



{/* <h1>Dane przesłane od dziecka</h1>
<Child childdataHandler={setdataFromChild} />
{dataFromChild && <h3>{dataFromChild}</h3>} */}