import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/context'

const Category = () => {
  const { category } = useParams()
  const { gf } = GifState()

  const [results, setResults] = useState([])

  const fetchResults = async () => {
    const { data } = await gf.gifs(category, category)
    setResults(data)
  }

  useEffect(() => {
    fetchResults()
  }, [category])

  return <div>Category</div>
}

export default Category
