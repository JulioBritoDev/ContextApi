import Painel from './pages/Painel'
import Login from './pages/Login'
import { useContext, useState } from 'react'
import { AutenticacaoContext } from './contexts/AutenticacaoContext'

function App() {
  const { logado } = useContext(AutenticacaoContext)

  if (logado == true) {
    return <Painel />
  } else {  
  return <Login /> 
  }

}

export default App
