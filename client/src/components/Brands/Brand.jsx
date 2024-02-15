import Marquee from 'react-fast-marquee'
import './Brand.css'

const fakeBrandData = [
    {
        id:1,
        image: '/image/brand-03.png'
    },

    {
        id:2,
        image: '/image/brand-04.png'
    },

    {
        id:3,
        image: '/image/brand-05.png'
    },

    {
        id:4,
        image: '/image/brand-06.png'
    },


    {
        id:5,
        image: '/image/brand-07.png'
    },


    {
        id:6,
        image: '/image/brand-08.png'
    }


]

const Brand = () => {
  return (
    <div>
        <Marquee>
            {fakeBrandData.map((brand) => {
                return(
                    <img src={brand.image} key={brand.id} className='marquee-image' alt="brand-image" />
                )
            })}
        </Marquee>
    </div>
  )
}

export default Brand