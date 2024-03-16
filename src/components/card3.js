import { Button, Card, Col } from 'react-bootstrap';
import Check from './icons/check';
import NavbarWithCircle from './navbarwithcircle';
import Rectangle30 from './figures/rectangle30';
import Rectangle272 from './figures/rectangle272';
import Rectangle28 from './figures/rectangle28';    
import Rectangle252 from './figures/rectangle252';
import Rectangle29 from './figures/rectangle29';
import Rectangle262 from './figures/rectangle262';
import RectangleCircle from './figures/rectanglecircle';
function Card3() {
  return (
    <Card style={{ width: '1280px', height: '496px', borderRadius: '30px',padding: '80px', gap: '80px', background: '#FFFFFF', display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>

      <Card.Body style={{ width: '520px', height: '274px', gap: '24px', background: '#FFFFFF', marginBottom: '20px' }}>

        <Card.Body className='Heading/2' style={{ background: '#FFFFFF', font: 'Roboto', fontWeight: '800', fontSize: '56px', lineHeight: '61.6px', width: '520px', height: '62px', gap: '24px', marginBottom: '45px' }}>Why join us</Card.Body>
        <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>

        <Col style={{ width: '489px', height: '108px',marginTop:'10PX' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px'  }}>
            <Check style={{ marginRight: '8px' }} />
            <Card.Text >
              Est et in pharetra magna adipiscing ornare aliquam.
            </Card.Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px'  }}>
            <Check style={{ marginRight: '8px' }} />
            <Card.Text>
              Est et in pharetra magna adipiscing ornare aliquam.
            </Card.Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px'  }}>
            <Check style={{ marginRight: '8px' }} />
            <Card.Text>
              Est et in pharetra magna adipiscing ornare aliquam.
            </Card.Text>
          </div>
        </Col>
        <Button variant="outline-secondary" style={{ tabSize: 'M', color: ' #78350F', font: 'Roboto', borderPadding: '0px 16px 0px 16px ', fontWeight: '500', fontSize: '16px', lineHeight: '24px', minWidth: '125px', borderRadius: '8px', border: '2px solid #78350F' }}>Sign Up Now</Button>

      </Card.Body>


      <Card.Body style={{ display: 'flex', flexDirection: 'column',  width: '520px', height: '350px', borderRadius: '20px',border:'5px', background: '#FFFFFF', zIndex: '6' ,padding:'5px',marginBottom: '5px'}}>
        <NavbarWithCircle></NavbarWithCircle>
        <Card.Img src="\images\running.jpeg" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: '100%', height: '309px', borderRadius: '1px solid', objectFit: 'cover' }}  />
      </Card.Body>
      <Rectangle30></Rectangle30>
      <Rectangle272></Rectangle272>
      <Rectangle28></Rectangle28>
      <Rectangle252></Rectangle252>
      <Rectangle29></Rectangle29>
      <Rectangle262></Rectangle262>
      <RectangleCircle></RectangleCircle>
    </Card>
  );
}

export default Card3;
