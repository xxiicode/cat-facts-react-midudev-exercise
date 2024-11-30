import { useState, useEffect } from 'react'
import './App.css'
import { useCats } from './assets/customHook'


function App() {

  const { gif, catFact} = useCats()
  
  return (
    <main>
      <section>
        <h1>Random<span>()</span> cat fact<br /><span>&</span> gif about it</h1>
        <p>"{catFact}"</p>
        {gif ? <img src={gif}/> : "No quote for gifs"}
        
      </section>
      <section>
        {gif && <button>Get another shot</button>}
      </section>
    </main>
  )
}

export default App
