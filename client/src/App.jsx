import { useState, useRef } from "react"
import axios from "axios";
// useRef renderizar elemento del DOM
// import shortUrl from './components/api/shortUrl';


const App = () => {

  const inputRef = useRef(); //referencia al input
  const [shortURL, sethortURL] = useState('') //se crea el estado

  const handleSubmit = (e) => {
    e.preventDefault(); //evitamos que se recargue la pagina
    const url = inputRef.current.value;
    //TODO: peticion a la API

    axios.post('/api/shortUrl', {url},{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error('Error', error)
    })
  };



  return (
    <div>
      <h1>URL shortener</h1>
      <p>Acorta tus URL aqui</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="URL" />

          <button>Acortar</button>
          <span>
            {shortURL}
          </span>
        </form>

      </div>

    </div>
  )
}

export default App
