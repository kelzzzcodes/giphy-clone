import { GiphyFetch } from '@giphy/js-fetch-api'
import { createContext, useContext, useState } from 'react'

const GifContext = createContext()

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [filter, setFilter] = useState('gifs')
  const [favorites, setFavorites] = useState([])

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

  const value = {
    gf,
    gifs,
    setGifs,
    filter,
    setFilter,
    favorites, 
    setFavorites,
  }
  return <GifContext.Provider value={value}>{children}</GifContext.Provider>
}

export const GifState = () => {
  return useContext(GifContext)
}
export default GifProvider
