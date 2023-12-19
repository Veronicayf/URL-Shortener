import { useState, useRef  } from "react"
// useRef renderizar elemento del DOM

const App = () => {

  const inputRef = useRef();
  const [shortURL, sethortURL] = useState('')

  const handleSubmit = (element) => {
    element.preventDefault();
    const url = inputRef.current.value;
    //TODO: peticion a la API
  }

  return (
    <div>
      <h1>URL shortener</h1>
      <p>Acorta tus URL aqui</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input 
          ref={inputRef} 
          type="text" 
          placeholder="URL"/>

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
