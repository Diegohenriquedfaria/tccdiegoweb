import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Layout } from './Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <h1>Pagina legal</h1>
        <p>este conteudo está dentro do slot, CHILDREN</p>
      </Layout>
    </>
  )
}

export default App
