// import { Carousel } from 'bootstrap';
import { Link } from 'react-router-dom'
import { useState } from "react"  
import { useNavigate } from "react-router-dom"  
function Navbar() {
  const [txt, setTxt]=useState()  
  const navigate=useNavigate()  

  const handleClick=()=>  
  {  
    navigate(`/user/${txt}`)  
  }

  return (
    <div classNameName="home-page">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to="/home" >Home</Link>
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/aboutus" >About</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/contactus" >Contact</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/user" >Employees</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/components/processtabs/processtabs" >Process</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/calculator" >calculator</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/txtutility" >TextUtility</Link>
          </a>
        </li>
          <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/formvalidation" >FormValidation</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/getapi" >GetAPI</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/components/pages/dashboard" >Dashboard</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/weatherbycity" >GetWeather</Link>
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/products" >GetProducts</Link>
          </a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setTxt(e.target.value)} />
        <button className="btn btn-outline-success" type="submit" onClick={handleClick} >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    
  );
}

export default Navbar;