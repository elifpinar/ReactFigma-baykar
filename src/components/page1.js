import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import FigureYellow1 from './figures/figure1';
import CardGroup1 from './cardgroup1';
import Rectangle31 from './figures/rectangle31';
import PlayCircle from './icons/playcircle';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Footer from './footer';

function TextExample1() {
  return (
    <div>

      <Container fluid className="px-0" style={{  width: '1440px', height: '5450px', background: '#fffaf0',  margin: '0 auto', zIndex: '-2' }}>
        <div style={{backgroundOrigin: 'content-box',paddingTop:'80px',paddingBottom:'0px',height:'886px',backgroundImage: "url('images/Rectangle31.png')",backgroundPosition: 'right top',backgroundRepeat: 'no-repeat'}}>

          <Row className="mx-0 justify-content-center" style={{width:'1440px',height:'583px', padding:'0px 80px 80px 80px',gap:'80px'}}>
            <Col  style={{ width: '714px', height: '257px', gap: '48px' }}>
              <Card border='0' style={{ background: '#fffaf0', gap: '48px',width: '714px', height: '257px'}}>
                <Card.Body >
                  <Card.Title style={{  fontFamily: 'RobotoHeading/1 M', fontWeight: '800', fontSize: '64px', lineHeight: '79.2px', color: '#0F172A' }}>Collectible Sneakers</Card.Title>
                  <Card.Text style={{  fontFamily: 'Roboto Body/L', fontWeight: '400', fontSize: '18px', lineHeight: '28.8px' }}>
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                  </Card.Text>
                  <div style={{ gap: '12px' }}>

                    <Button variant="outline-secondary" style={{ color: '#78350F', fontFamily: 'Roboto Button/L', borderPadding: '0px 16px 0px 16px ', fontWeight: '500', fontSize: '16px', size: '20px', lineHeight: '24px', minWidth: '125px', borderRadius: '8px', border: '2px solid #78350F', letterSpacing: '0.5px' }}>Sign up now</Button>
                    <Button variant="outline-secondary" style={{ color: '#78350F', fontFamily: 'Roboto Button/L', padding: '16px', fontWeight: '500', fontSize: '16px', size: '20px', lineHeight: '24px', minWidth: '125px', border: '0px solid #78350F', letterSpacing: '0.5px' }}> <img src='images/play-circle.png' width='24px' height='24px' /> Watch Demo </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ maxWidth: '486px', height: '423px' }}>
              <Card border='0' style={{ backgroundColor:'transparent'}}>
                <Card.Body>
                  <FigureYellow1 >
                  </FigureYellow1>
                </Card.Body>

              </Card>
            </Col>
          </Row>


          <CardGroup1 ></CardGroup1>
          {/* <Rectangle31></Rectangle31> */}
        </div>


        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
        <Page6></Page6>
        <Footer></Footer>


      </Container>

    </div>
  );
}

export default TextExample1;
