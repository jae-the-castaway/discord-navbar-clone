import { useState } from 'react'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex '>
      <SideBar />
    </div>
  )
}

export default App
