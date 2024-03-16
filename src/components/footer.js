
import CardsGroup2 from './cardsgroup2';
import HeaderTheBest from './headerthebest';
import { Card, CardGroup, Button, Col, Row, Container } from 'react-bootstrap';

function Page2() {
    return (
        <div style={{ width: '1440px', background: '#0F172A', display: 'flex', height: '532px', padding: '0px 80px 0px 80px' }}>
            
            <div style={{ width: '1280px', background: '#0F172A', gap:'48px',display: 'flex', height: '368px', padding: '48px 0px ',border:'1px 0px 1px 0px' }}>
            <Row style={{ background: '#0F172A' }}>
                <Col style={{ width: '284px', height: '272px', gap: '16px', display: 'flex', flexDirection: 'column' }}>

                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#FFFFFF', lineHeight: '17.6px', textAlign:'left' }}>
                    Product
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Pricing
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Overview
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Browse
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Accessibility
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Five
                    </Button>
                    <div style={{background:'#0F172A'}}>
                    <img src='./images/Bottom.png' style={{width:'1280px', background: '#0F172A', borderRadius: '0', gap:'48px', padding:'10px 0px'}}></img>
                    </div>

                </Col>
            </Row>





            <Row style={{ background: '#0F172A' }}>
                <Col style={{ width: '284px', height: '272px', gap: '16px', display: 'flex', flexDirection: 'column' }}>

                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#FFFFFF', lineHeight: '17.6px', textAlign:'left'  }}>
                    Solutions
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Brainstorming
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Ideation
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Wireframing
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Research
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Design
                    </Button>
                    
                </Col>
            </Row>

            <Row style={{ background: '#0F172A' }}>
                <Col style={{ width: '284px', height: '272px', gap: '16px', display: 'flex', flexDirection: 'column',alignItems:'flex-start' }}>

                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px ', gap: '8px', font: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#FFFFFF', lineHeight: '17.6px', textAlign:'left'  }}>
                    Support
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Contact Us
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Developers
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Documentation
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px', textAlign:'left'  }}>
                    Integrations
                    </Button>
                    <Button style={{ background: 'transparent', border: '0px', width: '284px', height: '46px', padding: '12px 0px 12px 0px', gap: '8px', font: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#E2E8F0', lineHeight: '22.4px' , textAlign:'left' }}>
                    Reports
                    </Button>
                </Col>
            </Row>


            <Row style={{ background: '#0F172A' }}>
                <Col style={{ width: '284px', height: '272px', gap: '16px', display: 'flex', flexDirection: 'column' }}>

                    
                    <img src='./images/Column.png'></img>
                   
                </Col>

                
            </Row>

            

        
            </div>






        </div>




    );
}

export default Page2;