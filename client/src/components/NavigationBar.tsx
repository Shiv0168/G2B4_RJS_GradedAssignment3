import {Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <div>
            <Navbar bg="dark" variant='dark' expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '50px' }}
                        navbarScroll>
                        <Nav.Link to="/movies-coming" className='mx-2' as={NavLink}>Coming soon</Nav.Link>
                        <Nav.Link to="/movies-in-theaters" className='mx-2' as={NavLink}>Movies In Theaters</Nav.Link>
                        <Nav.Link to="/top-rated-india" className='mx-2' as={NavLink}>Top Rated Movies</Nav.Link>
                        <Nav.Link to="/top-rated-movies" className='mx-2' as={NavLink}>Top Rated Movies</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
  )
}
