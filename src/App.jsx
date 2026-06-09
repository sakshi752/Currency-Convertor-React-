import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'

function App() {

  return (
    <div>
      <form action="">
        <div>
          <InputBox/>
        </div>
        <div>
          <button>Swap</button>
        </div>
        <div>
          <InputBox/>
        </div>
      </form>
    </div>
  )
}

export default App
