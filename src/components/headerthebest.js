import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderTheBest() {
    return (
        <Navbar style={{ width:'1280px',height: '64px' ,background: '#0F172A'}}>
            <Container fluid>
                <Navbar.Brand href="#" className='Heading/2' style={{color: ' #FFFFFF', font: 'Roboto', fontWeight: '800', fontSize: '56px', lineHeight: '61.6px' }}>The best of the best</Navbar.Brand>
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    

                    <Button variant="outline-secondary" style={{tabSize:'24px', color:' #FFFFFF', font:'Roboto/XL',borderPadding:'20px 24px 20px 24px' , fontWeight:'700' , fontSize:'24px',lineHeight:'64px', minWidth:'233px' ,borderRadius:'8px', border: '2px solid #FFFFFF' }}>Sign up now</Button>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderTheBest;