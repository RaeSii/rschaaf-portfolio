import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand onClick={() => handlePageChange('Home')} href="#home">Rachel Schaaf</Navbar.Brand>
                    <Nav inline my="2 lg-0">
                        <Nav.Link onClick={() => handlePageChange('About')} href="#about">About Me</Nav.Link>
                        <Nav.Link onClick={() => handlePageChange('Work')} href="#work">Portfolio</Nav.Link>
                        <Nav.Link onClick={() => handlePageChange('Contact')} href="#contact">Contact</Nav.Link>
                        <Nav.Link onClick={() => handlePageChange('Resume')} href="#resume">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}



// function NavTabs() {
//     return (
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a
//             href="#home"
//             onClick={() => handlePageChange('Home')}
//             // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//             // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//             className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//           >
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#about"
//             onClick={() => handlePageChange('About')}
//             // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//           >
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#blog"
//             onClick={() => handlePageChange('Blog')}
//             // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
//           >
//             Blog
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#contact"
//             onClick={() => handlePageChange('Contact')}
//             // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     );
//   }
  
  export default Navigation;
  