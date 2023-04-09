
import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function NavBar() {

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (


      
      <>
<div>
<Navbar  >
        <Container >

        <Link to={`/`} > <Navbar.Brand>HOME</Navbar.Brand></Link>
      <img src="https://cdn-icons-png.flaticon.com/512/539/539859.png" style={{ width: '50px', height: '50px'}}/> 
          <Nav className="me-auto" >
          <Link to={``}> <Navbar.Brand ></Navbar.Brand></Link>
          <Link to={`/category/ipa`}> <Navbar.Brand >Ipa</Navbar.Brand></Link>
          <Link to={`/category/rubias`}> <Navbar.Brand>Rubias</Navbar.Brand></Link>
          <Link to={`/category/rojas`}> <Navbar.Brand>Rojas</Navbar.Brand></Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>
</div>
 
</>

    );
}

export default NavBar;
