import { BiCartAdd } from "react-icons/bi"; 
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ecommerce</h1>
      <div className="navbar-links">
          <Link to ={'/login'}> Login</Link>
          <Link to={'/register'}>Register</Link>
          <BiCartAdd />

      </div>
    </nav>
  )
}

export default Navbar