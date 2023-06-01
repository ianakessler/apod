import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import axios from 'axios';
import Footer from './components/footer';

function App() {

  const [res, setRes] = useState('')
  const [pics, setPics] = useState([])



  const aoEnviar = (event) => {
    event.preventDefault()
    console.log(res)
    setRes('')

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=xakHf6uuWhfrORqbcIcqvvvwTt80VajE31uiWxdS&date=${res}`)
    .then((response)=> {
      setPics([response.data])
    })

  }





  //retorno/renderização
  return (
    <div className="App">

      <h1>Envie uma data (AAAA-MM-DD)</h1>

      <form onSubmit={aoEnviar}>
        <Input
        className='inpt'
        value={res}
        aoAlterado={value => setRes(value)}
        />

        <input className='submit' type='submit' value='Enviar' /> 
      </form>

      <section>
          {pics.map(pic => 

            <div className='card' key={pic.title}>

              <h2>{pic.title}</h2>

              <img src={pic.url} alt={pic.title}/>

              <p><strong>Explanation:</strong> {pic.explanation}</p>


            </div>

            )}
      </section>
      
      <Footer/>

    </div>
  );
}

export default App;
