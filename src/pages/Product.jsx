import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAPI } from '../context/ApiContext'

const Product = () => {
  const API_URL = useAPI()
  const { category, title } = useParams()

  const [tile, setTile] = useState({})
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    setMainImage(tile?.img1);


    const fetchTile = async () => {
      try {
        const response = await fetch(
          `${API_URL}/${category}/${title}`
        )

        const data = await response.json()
        setTile(data)
      }
      catch (err) {
        console.log("Error: ", err)
      }
    }

    fetchTile()

  }, [API_URL, category, title, tile?.img1])

  return (
    <section id="product" className="py-5">
      <div className="container py-3">
        <div className="row g-5">
          <div className="col-md-6">

            <div>
              <img
                src={mainImage}
                alt={tile.title}
                className="img-fluid"
              />
            </div>

            {/* Thumbnails */}
            <div className="d-flex gap-3 mt-3">

              <img
                src={tile.img1}
                alt=""
                width="168"
                height="167"
                className="object-fit-cover"
                style={{ cursor: "pointer" }}
                onClick={() => setMainImage(tile.img1)}
              />

              <img
                src={tile.img2}
                alt=""
                width="168"
                height="167"
                className="object-fit-cover"
                style={{ cursor: "pointer" }}
                onClick={() => setMainImage(tile.img2)}
              />

            </div>
          </div>
          <div className="col-md-6">
            <h1>{tile.title}</h1>

            <div className='py-2'>
              <h5 className="headings">Description</h5>
              <p>{tile.desc}</p>
            </div>

            <h5 className="headings">Specifications</h5>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Attribute</th>
                  <th className="text-center">Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Collection</td>
                  <td>{tile.category}</td>
                </tr>
                <tr>
                  <td>Thickness</td>
                  <td>{tile.thickness}</td>
                </tr>
                <tr>
                  <td>Background Color</td>
                  <td>{tile.background}</td>
                </tr>
                <tr>
                  <td>Vein Color</td>
                  <td>{tile.vein}</td>
                </tr>
              </tbody>
            </table>

            <Link
              to="/get-in-touch"
              className="fs-4 text-dark"
            >
              Start Your Order
            </Link>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Product