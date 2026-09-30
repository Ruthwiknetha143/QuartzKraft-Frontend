import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'
import { Link } from 'react-router-dom'

const Collections = () => {
  const API_URL = useAPI()
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`${API_URL}/collections`)
        const data = await response.json()

        setCollections(data)
      }
      catch (err) {
        console.log("Error: ", err)
      }
    }

    fetchCollections()
  }, [API_URL])

  return (
    <section id="collections">
      {collections.map((collection) => (
        <div className="container mt-5 mb-5">

          <h1>{collection[0]?.category}</h1>

          <div className="row">
            {collection.slice(0, 3).map(value => (
              <div className="col-md-4">

                <Link
                  to={`/${collection[0]?.category.split(" ")[0]}/${value.title}`}
                >
                  <img
                    src={value.img1}
                    alt={value.title}
                    className="img-fluid"
                  />
                </Link>

                <p>{value.title}</p>

              </div>
            ))}
          </div>

          <div className="text-end">
            <Link
              to={`/${collection[0]?.category.split(" ")[0]}`}
            >
              Explore Collection
            </Link>
          </div>

        </div>
      ))}
    </section>
  )
}

export default Collections