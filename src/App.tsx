import { useState } from 'react'
import Chart from './component/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''> 
      <Chart/>
    </div>
  )
}

export default App
