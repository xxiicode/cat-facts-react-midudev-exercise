import { useState, useEffect } from 'react'

export const useCats = () => {
    const cat_fact_endpoint = 'https://catfact.ninja/fact'
    const gigphy_endpoint = 'https://api.giphy.com/v1/gifs/search'
    const API_KEY_GIPHY = 'IXJanALMKkAbvv00mWA81Po1F0OBCYuk' 
    //
    const [catFact, setCatFact] = useState('')
    const [gif, setGif] = useState('')

    // Get the random Fact
    useEffect(() => {
    fetch(cat_fact_endpoint)
        .then((res) => res.json())
        .then(data => {
        console.log('(1)' + data.fact)
        setCatFact(data.fact)
        })
    }, [])

    // Get the random gif
    useEffect(() => {
    if (!catFact) return;
    const catTags = catFact.split(' ', 3)
    const query = catTags.some((word) => word.toLowerCase() === "cat" || word.toLowerCase() === "cats") ? catTags.join(' ') : catTags.join(' ') + ' cat'

    console.log('(2)' + query)

    fetch(`${gigphy_endpoint}?api_key=${API_KEY_GIPHY}&q=${query}&limit=1`)
        .then(res => res.json())
        .then(data => {
        console.log('(3)' + data.data[0].images.fixed_height.url)
        setGif(data.data[0].images.fixed_height.url)
        })

    }, [catFact])

    return {gif, catFact}
}