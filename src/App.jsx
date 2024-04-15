import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplitScreen from './components/layout/SplitScreen'
import LeftHandComponent from './components/layout/LeftHandComponent'
import RightHandComponent from './components/layout/RightHandComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <SplitScreen leftWeight={1} rightWeight={3} >
        <LeftHandComponent name={'test name'} />
        <RightHandComponent message={'test message'} />
      </SplitScreen>
  )
}

export default App


