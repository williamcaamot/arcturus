import { useState } from 'react'
import Router from './components/Router'

function App() {
  const [count, setCount] = useState(0)
//console.log('App.tsx')
  return (
    <>
      <div>
 
       
       <Router/>
      </div>
     
    </>
  )
}

export default App
