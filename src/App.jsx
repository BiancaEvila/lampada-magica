import lampadaMagica from "./assets/lampadaMagica.png"
import genioLampada from "./assets/genioLampada.png"
import "./app.scss"
import { useState } from "react"

export default function App(){

  const [imagem, setImagem] = useState(lampadaMagica)
  const [alt, setAlt] = useState("Imagem de uma lâmpada mágica")

  const mudarImagem = () => {
    if (imagem === lampadaMagica) {
      setImagem(genioLampada)
      setAlt("Imagem do gênio da lâmpada")
    } else {
      setImagem(lampadaMagica)
      setAlt("Imagem de uma lâmpada mágica")
    }
    
  }


  return(
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladdin."</p>
      <img src={imagem} alt={alt} />
      <button onClick={mudarImagem}>Clique Aqui</button>
    </main>
  )
}