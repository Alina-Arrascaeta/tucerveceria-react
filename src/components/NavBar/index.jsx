
import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



function NavBar() {
    return (




<div>
<Navbar bg="light" variant="light" >
        <Container >
        <Link to={`/`} > <Navbar.Brand>Home</Navbar.Brand></Link>
          <Nav className="me-auto" >
          <Link to={`/category/ipa`}> <Navbar.Brand >IPA</Navbar.Brand></Link>
          <Link to={`/category/rubias`}> <Navbar.Brand>RUBIAS</Navbar.Brand></Link>
          <Link to={`/category/rojas`}> <Navbar.Brand>ROJAS</Navbar.Brand></Link>
          </Nav>
        </Container>
      </Navbar>
</div>
 



    );
}

export default NavBar;
