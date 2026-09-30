import { useEffect, useState } from 'react'
import { useAPI } from '../context/ApiContext'
import './overall.css'
import { Link } from 'react-router-dom'

const About = () => {
  const API_URL = useAPI()
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/aboutUsImages`)
        const data = await response.json()
        setImages(data)
      }
      catch (err) {
        console.log("Error: ", err)
      }
    }
    fetchImages()
  }, [API_URL])

  return (
    <section id='about'>
      <div id="story">
        <div className="container">
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col">
              <h1>Our Story</h1>
              <h4>Engineered Surfaces. Crafted with Purpose.</h4>
              <p>QuartzKraft is a manufacturer of premium engineered quartz surfaces, built on decades of expertise in the stone industry. Our company combines craftsmanship, advanced manufacturing, and design innovation to create surfaces that deliver both beauty and long-term performance.</p>
              <p>From our headquarters in Hyderabad and manufacturing operations in Ongole, India, we serve customers across international markets with a strong focus on quality, reliability, and partnership.</p>
              <Link to='/collections'>Explore Our Collections</Link>
            </div>
            <div className="col">
              <img src={images[0]?.image} alt="" height='378px' width='568px' />
            </div>
          </div>
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col">
              <div className="d-flex align-items-center justify-content-center text-center gap-4 h-100">
                <div className='bg-white p-3'>
                  <h4>Natural Stone Inspired</h4>
                  <p>Timeless design and modern precision.</p>
                </div>
                <div className='bg-white p-3'>
                  <h4>Quality & Variety</h4>
                  <p>Reliable global supply with diverse finishes.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>Design-driven surfaces inspired by nature.</h4>
              <p>QuartzKraft develops engineered quartz surfaces that combine the timeless beauty of natural stone with the precision of handcrafting techniques and modern manufacturing. With reliable and on-time global deliveries, we pride ourselves on high quality products with less than a 0.5% complaint rate. Our product portfolio includes a wide palette of colors, finishes, and textures designed for residential and commercial spaces.</p>
            </div>
          </div>
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col">
              <h4>Manufacturing with Intention.</h4>
              <p>Our manufacturing approach blends traditional craftsmanship with automation and in-house technical development, enabling complex designs while maintaining natural-looking products and high quality standards.</p>
              <p>Our people are at the heart of everything we do, combining deep industry expertise with a strong culture of craftsmanship and precision.</p>
            </div>
            <div className="col">
              <img src={images[1]?.image} alt="" height='286px' width='568px' />
            </div>
          </div>
        </div>
      </div>
      <div id="difference">
        <div className="container">
          <h1>The QuartzKraft Difference</h1>
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col">
              <img src={images[2]?.image} alt="" height='298px' width='570px' />
            </div>
            <div className="col">
              <h4>Built on Experience. Focused on Partnership.</h4>
              <p>QuartzKraft is a family-led company with over three decades of experience in the global stone industry. Built on craftsmanship, reliability, and long-term relationships, we partner with our customers to deliver surfaces that meet the highest standards of quality and performance.</p>
              <p>Our focus is simple: exceptional materials, dependable supply, and collaborative partnerships that support our customers’ growth.</p>
              <Link to='/collections'>Explore Our Collections</Link>
            </div>
          </div>
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col">
              <h4>Where Craftsmanship Meets Precision.</h4>
              <p className='w-75'>At QuartzKraft, every surface begins with carefully selected raw materials and production expertise.</p>
              <img src={images[3]?.image} alt="" height='546px' width='525px' />
            </div>
            <div className="col">
              <div className="d-flex flex-column gap-4">
                <div className='p-5 border'>
                  <p>Premium quartz grit, resins, and pigments sourced from trusted global partners.</p>
                </div>
                <div className="row gap-4">
                  <div className="col p-5 border">
                    <p>A curated portfolio ranging from mid-range to premium collections, including backlit designs.</p>
                  </div>
                  <div className="col p-5 border">
                    <p>Proven low-silica and zero-silica capabilities supporting the future of safe engineered surfaces.</p>
                  </div>
                </div>
                <div className='p-5 border'>
                  <p>Our veining patterns are carefully handcrafted by skilled artisans, allowing us to create surfaces with depth, movement, and natural variation that closely reflect the beauty of natural stone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="compromise">
        <div className="container">
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col p-5 border border-white">
              <h4>Quality Without Compromise.</h4>
              <p>Quality is never negotiable. From raw material sourcing to final slab inspection, our team is committed to delivering surfaces that meet the highest standards of consistency and performance.</p>
              <p>We take pride in every slab we produce and in the trust our customers place in our products.</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div id="chain">
        <div className="container">
          <div className='row mt-5 mb-5 align-items-center'>
            <div className='col'>
              <img src={images[4]?.image} alt="" height='292px' width='570px' />
            </div>
            <div className='col'>
              <h4>More Than a Supplier — A Strategic Partner.</h4>
              <p>We believe the strongest relationships are built through collaboration. QuartzKraft works closely with wholesalers to understand the market and develop products that succeed.</p>
              <p>Our team works closely with our partners to evaluate their existing product portfolio by conducting a market landscape analysis and identifying opportunities for differentiation and growth. We analyze color palettes, market trends, and competitive offerings to close key palette gaps.</p>
              <p>Because when our partners succeed, so do we.</p>
            </div>
          </div>
          <div className='row mt-5 mb-5 align-items-center'>
            <div className='col'>
              <h4>Supply Chain Management.</h4>
              <p>With core leadership experience spanning more than three decades in the U.S. and European markets, our team understands the operational realities of global distribution.</p>
              <p>We support our partners with disciplined supply chain management, including inventory forecasting and demand planning, reliable production scheduling, efficient logistics coordination and consistent on-time deliveries.</p>
            </div>
            <div className='col'>
              <img src={images[5]?.image} alt="" height='292px' width='570px' />
            </div>
          </div>
          <div className='row mt-5 mb-5 align-items-center'>
            <div className='col'>
              <img src={images[6]?.image} alt="" height='292px' width='570px' />
            </div>
            <div className='col'>
              <h4>Samples That Sell.</h4>
              <p>We produce exclusive sample slabs that showcase the full beauty and character of our surfaces. Our dedicated sample support ensures sales teams have the tools they need to effectively present and promote our products in the market.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="factory">
        <div className="container">
          <div className="row mt-5 mb-5 align-items-center">
            <h1>Inside the QuartzKraft Factory</h1>
            <div className="col">
              <h4>Where Craftsmanship and Technology Come Together.</h4>
              <p>Behind every QuartzKraft surface is a team of skilled craftsmen, engineers, and production specialists working together to create quartz slabs of exceptional quality. Our in-house technology lab continuously works to develop new, niche techniques and patterns to share with our customers.</p>
              <p>Our facility combines manufacturing technology with the hands-on expertise of artisans who bring depth, character, and precision to every surface we produce.</p>
              <p>From raw material preparation to final slab inspection, every stage of production reflects our commitment to quality, consistency, and craftsmanship.</p>
              <Link to='/collections'>Explore Our Collections</Link>
            </div>
            <div className="col">
              <img src={images[7]?.image} alt="" width='570px' height='427px' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
