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
    <section>
      <div className="container py-5">
        <h1 className="py-3">{category} Collection</h1>
        <div className="row g-5">
          {tiles.map(tile => (
            <div className="col-md-4">
              <Link to={`/${category}/${tile.title}`}>
                <img
                  className="img-fluid"
                  src={tile.img1}
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
