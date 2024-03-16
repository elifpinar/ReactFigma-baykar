import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ForNavbar() {
    return (
        <Navbar style={{ width:'1440px',height: '96px', padding: '24px 80px', justifyContent: 'space-between' ,background: '	#fffaf0',margin: '0 auto'}}>
            <Container fluid>
                <Navbar.Brand href="#" className='Heading/5' style={{ color: ' #78350F', font: 'Roboto', fontWeight: '700', fontSize: '32px', lineHeight: '35.2px' }}>Collers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    <Nav style={{gap:'16px'}}>
                        <Nav.Link href="#action1" style={{ color: ' #78350F', font: 'Roboto', padding: '12px,8px, 12px,8px', gap: '8px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' }}>Products  </Nav.Link>
                        <Nav.Link href="#action2" style={{ color: ' #78350F', font: 'Roboto', padding: '12px,8px, 12px,8px', gap: '8px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' }}>Solutions</Nav.Link>
                        <Nav.Link href="#action3" style={{ color: ' #78350F', font: 'Roboto', padding: '12px,8px, 12px,8px', gap: '8px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' }}>Pricing</Nav.Link>
                        <Nav.Link href="#action4" style={{color:' #78350F', font:'Roboto',padding:'12px,8px, 12px,8px' , gap:'8px', fontWeight:'500' , fontSize:'16px',lineHeight:'24px', letterSpacing:'0.5px'}}>Resouces</Nav.Link>
                        <Nav.Link href="#action4" style={{color:' #78350F', font:'Roboto',padding:'12px,8px, 12px,8px' , gap:'8px', fontWeight:'500' , fontSize:'16px',lineHeight:'24px', letterSpacing:'0.5px'}}>Log In</Nav.Link>
                    </Nav>

                    <Button variant="outline-secondary" style={{tabSize:'M', color:' #78350F', font:'Roboto',borderPadding:'0px 16px 0px 16px ' , fontWeight:'500' , fontSize:'16px',lineHeight:'24px', minWidth:'125px' ,borderRadius:'8px', border: '2px solid #78350F' }}>Sign Up Now</Button>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ForNavbar;