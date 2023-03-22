
import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
      // <>
      // <Navbar bg="light" variant="light" style={{color:'Goldenrod', backgroundColor:'Goldenrod'}}>
 <div>

<NavLink to={`/`}>Home</NavLink>
<NavLink to={`/category/ipa`}>IPA</NavLink>
<NavLink to={`/category/rubias`}>Rubias</NavLink>
<NavLink to={`/category/rojas`}>Rojas</NavLink>

    </div>

 



    );
}

export default NavBar;


// import CardWidget from "../CardWidget";
// import "./navbar.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from "react-router-dom";



// function NavBar({changeValue}) {
//     return (
//       <>
//       <Navbar bg="light" variant="light" style={{color:'Goldenrod', backgroundColor:'Goldenrod'}}>
//       <Container>

//           <NavLink to={"/"}>Home</NavLink>
//         <NavLink to={"/category/ipa"}>IPA</NavLink>
//         <NavLink to={"/category/rubias"}>RUBIAS</NavLink>
//         <NavLink to={"/category/rojas"}>ROJAS</NavLink>

//       </Container>
//     </Navbar>
//   </>
//             //  <div className="navbar">
//             //     <ul>
//             //     { /* agregamos boton para ejecutar la funcion cuando le damos click  */}

//             //     <li>
//             //         <button onClick={changeValue}></button>
//             //      </li>
//             //      <li>
//             //         <button>Inicio</button>
//             //      </li>
//             //      <li>
//             //         <button>Rubias</button>
//             //      </li>

//             //      <li>
//             //         <button>Contacto</button>
//             //      </li>


//             //     </ul>
//             //  <CardWidget />
//             //  </div>

// /* <Navbar bg="light" variant="light">
// <Container>
//   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//   <Nav className="me-auto">
//     <Nav.Link href="#home">Home</Nav.Link>
//     <Nav.Link href="#features">Features</Nav.Link>
//     <Nav.Link href="#pricing">Pricing</Nav.Link>
//   </Nav>
// </Container>
// </Navbar> */

//     );
// }

// export default NavBar;