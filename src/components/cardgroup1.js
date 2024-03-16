import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Rectangle25 from './figures/rectangle25';
import Rectangle26 from './figures/rectangle26';
import Rectangle27 from './figures/rectangle27';
import { Row ,Col} from 'react-bootstrap';

function CardGroup1() {
    return (
        <Row style={{width:'1440px',height:'365px',paddingLeft:'80px',paddingRight:'80px',gap:'80px', backgroundColor:'transparent', margin: '0 auto',display: 'flex', flexDirection: 'row'}} >
            <Col  border='0' style={{  backgroundColor:'transparent' }}>
                {/*<Rectangle25></Rectangle25>*/}
                <img src='images/rectangle25.png' width='90px' height='40px' style={{position:'absolute',paddingLeft:'30px'}}/>
                <img src='images/Iconkupa.png' width='64px' height='64px' style={{position:'absolute'}}/>
                <Card.Body style={{position:'relative', top:'64px'}}>
                    <Card.Title>Nibh viverra</Card.Title>
                    <Card.Text >
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </Card.Text>
                </Card.Body>

            </Col>
            <Col border='0' style={{  backgroundColor:'transparent' }} >
            {/* <Rectangle26></Rectangle26> */}
            <img src='images/rectangle26.png' width='63px' height='43px' style={{position:'absolute',paddingLeft:'20px'}}/>
                <img src='images/Iconface.png' width='64px' height='64px' style={{position:'absolute'}}/>
                <Card.Body style={{position:'relative', top:'64px'}}>
                    <Card.Title>Cursus amet</Card.Title>
                    <Card.Text>
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                        {' '}
                    </Card.Text>
                </Card.Body>

            </Col>
            <Col border='0' style={{  backgroundColor:'transparent' ,zIndex: '3'}}>
            {/* <Rectangle27></Rectangle27> */}
            <img src='images/rectangle27.png' width='85px' height='45px' style={{position:'absolute',paddingLeft:'40px'}}/>
                <img src='images/Icontv.png' width='64px' height='64px' style={{position:'absolute'}}/>
                
                <Card.Body style={{position:'relative', top:'64px'}}>
                    <Card.Title>Ipsum fermentum
                    </Card.Title>
                    <div  style={{position:'absloute', zIndex:5}} >
                        
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                        
                    </div>
                </Card.Body>
            </Col>
        </Row>
    );
}

export default CardGroup1;