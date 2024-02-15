import { BsTruck } from "react-icons/bs"; 

import { BsMailbox } from "react-icons/bs"; 
import { BiPhoneCall } from "react-icons/bi"; 
import './Services.css';

const Services = () => {
  return (
    <div>
        <h1>Our Services</h1>
        <div className="service-container">
        <div>
            <BsTruck size={30}/>
            <h3>Free Delivery upto 5000 Rs</h3>
        </div>
        <div>
            <BiPhoneCall size={30} />
            <h3>24/7 Contact Services</h3>
        </div>
        <div>
            <BsMailbox size={30}/>
            <h3>24/7 Online Services</h3>
        </div>
    </div>
    </div>
  )
}

export default Services