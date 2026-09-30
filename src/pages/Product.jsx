import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAPI } from '../context/ApiContext'

const Product = () => {
  const API_URL = useAPI()
  const { category, title } = useParams()

  const [tile, setTile] = useState({})

  useEffect(() => {

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

  }, [API_URL, category, title])

  return (
    <section id='product'>
      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          <aside className='col'>
            <img src={tile.img1} alt="" height='356px' width='600px' />
            {/* <img src={tile.img2} alt="" height='516px' width='580px'/> */}
          </aside>
          <aside className='col'>
            <h1>{tile.title}</h1>
            <p>Description</p>
            <p>{tile.desc}</p>
            <p>Specifications</p>
            <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Details</th>
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
            <div className='mt-4 mb-5'>
              <Link to="/get-in-touch">Start Your Order</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Product