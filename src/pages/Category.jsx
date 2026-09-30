import { useAPI } from "../context/ApiContext"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const Category = () => {
  const { category } = useParams()

  const [tiles, setTiles] = useState([])
  const API_URL = useAPI()

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await fetch(`${API_URL}/${category}`)
        const data = await response.json()
        setTiles(data)
      }
      catch (err) {
        console.log('Error: ', err)
      }
    }

    fetchTiles()
  }, [API_URL, category])

  return (
    <section className="category">
      <div className="container">
        <h1 className="mt-5">{category} Collection</h1>
        <div className="row gap-5 mt-5 mb-5">
          {tiles.map(tile => (
          <div className="col">
            <Link to={`/${category}/${tile.title}`}>
              <img
                src={tile.img1}
                height="177px"
                width="353px"
              />
            </Link>
            <p>{tile.title}</p>
          </div>
        ))}
        </div>
      </div>

    </section>
  )

}

export default Category
