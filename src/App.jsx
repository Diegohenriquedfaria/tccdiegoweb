import { useState } from 'react'
import { Layout } from './Layout/'
import Habilidades from "./Habilidades";
import Navbar from "./Navbar";
import Sobre from "./Sobre";
import Servico from"./Servico";
import Portifolio from"./Portifolio";
import Footer from "./Footer";
import Paixao from "./Paixao";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>

      </Layout>
      < Navbar/>
      <Sobre/>
      < Habilidades/>
      <Servico/>
      <Portifolio/>
      <Paixao/>
      <Footer/>
    </>
  )
}

export default App
