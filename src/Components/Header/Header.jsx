import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from "../../menu-json-api/menu.json";
import company from "../../Company-Details-api/Companydtails.json";


function Mainmenu({items}) {
  return (  
    <>
     <Link to={items.Link} className={items.isButton ? " btn btn-primary": "nav-link"}>{items.label}</Link>


    </>
    )
}

function DropDownmenu({demo}) {
  // console.log(demo);
  return (
    <>
     <NavDropdown title={demo.label} id="navbarScrollingDropdown">
       {
        demo.dropDownMenu.map((it, ind)=>{

          return<Link to={it.Link} className='nav-link'>{it.label}</Link>

        })
       }     
            
    </NavDropdown>

    </>
    )
}

function Header() {
    // console.log(menu);
  return (
    <>
    {/* <h1 className='animate__animated animate__bounce animate__faster'>Header</h1> */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Link  to="/" className="navbar-brand">
        <img src={company.logo}alt="logo"  width={50} className='me-2'/>
        {company.name}</Link>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search"className="me-2"aria-label="Search"/>
          <Button variant="outline-success">Search</Button>
        </Form> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/" className='nav-link'>Learn</Link>
            <Link to="/link" className='nav-link'>Refrence</Link>
            <Link to="/community" className='nav-link'>Community</Link> */}

            {
              menu.map((item, ind)=>{

                if(item.isDropdown)
                {
                  return <DropDownmenu demo={item}/>

                }
                else
                {
                return <Mainmenu items={item}/>
                }

                
              }
              )
            }
            

            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    )
}

export default Header;