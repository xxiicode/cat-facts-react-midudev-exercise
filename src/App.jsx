import { useState, useEffect } from 'react'
import './App.css'
const GIPHY_API_KEY = 'IXJanALMKkAbvv00mWA81Po1F0OBCYuk';
const CAT_FACT_END_POINT = 'https://catfact.ninja/fact';
const GIPHY_END_POINT = 'http://api.giphy.com/v1/gifs/search'

function App() {

  const [catFact, setCatFact] = useState('')
  const [gif, setGif] = useState('')

  // levanta el random fact de los gatos
  useEffect(() => {
    fetch(CAT_FACT_END_POINT)
      .then(res => res.json())
      .then(data => setCatFact(data.fact || 'midu chat'))
      .catch((error) => console.error('hay un error:', error));
  },
  []);

  // levanta el gif
  useEffect(()=> {
    let tag = catFact.split(' ', 3);
    let tags = tag.some(word => word.toLowerCase() === "cat" || word.toLowerCase() === "cats") ? tag.join(' ') : tag.join(' ') + ' cat';
            console.log(tags)
    fetch(`${GIPHY_END_POINT}?api_key=${GIPHY_API_KEY}&q=${tags}&limit=1`)
    .then(res => res.json())
    .then ((data) => {
      setGif(data.data[0].images.fixed_height.url)
      console.log(data.data[0].images.fixed_height.url)
    });
    }
    ,
    [catFact]);

  return (
    <main>
      <h1>Hola gatos</h1>
      <p>{catFact}</p>
      <article>
        <img src={gif} alt=''/>
      </article>
    </main>
  )
}

export default App
