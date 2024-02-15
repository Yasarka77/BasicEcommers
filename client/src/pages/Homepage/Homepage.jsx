import Banner from "../../components/Banner/Banner"
import Brand from "../../components/Brands/Brand"
import Footer from "../../components/Footer/Footer"
import MostFeatured from "../../components/MostFeatured/MostFeatured"
import Navbar from "../../components/Navbar/Navbar"
import PopularProducts from "../../components/PopularProducts/PopularProducts"
import Services from "../../components/Services/Services"


const Homepage = () => {
  return (
<>
<Navbar />
<Banner />
<Services />
<MostFeatured />
<PopularProducts />
<Brand />
<Footer />



</>

    
  )
}

export default Homepage