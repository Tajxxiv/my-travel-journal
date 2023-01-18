import { useState } from 'react'
import Journal from './Journal'
import './App.css'
import data from './data'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)
  const journal = data.map(data => {
    return (
      <Journal 
      key={data.id}
      data={data}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      {journal}
    </div>
  )
}

export default App


