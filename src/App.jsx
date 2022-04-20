import React from 'react'
import './App.css'
import { Container } from './components'
import {TodoPage} from './pages'

const App = () => {
  return (
    <div className="App">
      <Container>
        <TodoPage />
      </Container>
    </div>
  )
}

export default App