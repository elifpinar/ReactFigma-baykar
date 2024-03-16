
import HeaderTheBest from './headerthebest';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Card4 from './card4';
import NavbarWithCircle from './navbarwithcircle';

function Page5() {
    return (
        <Card style={{
            width: '1440px', height: '996px', gap: '80px', background: '#fffaf0', border
            : '0px', overflow: 'hidden ',
        }}>

            <div
                style={{
                    position: 'absolute',
                    width: '1440px',
                    height: '684px',
                    top: '312px',
                    backgroundImage: "url('images/Vector 10.png')",
                    backgroundSize: 'cover',
                    zIndex: '1'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '1440px',
                    height: '564px',
                    top: '432px',
                    backgroundImage: "url('images/Vector 11.png')",
                    backgroundSize: 'cover',
                    zIndex: '2'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '1440px ',
                    height: '372px',
                    top: '624px',
                    backgroundImage: "url('images/Vector 12.png')",
                    backgroundSize: 'cover',
                    zIndex: '3'
                }}
            />

            <div style={{ width: '1440px', height: '996px', gap: '80px', padding: '80px 80px 128px 80px' }}>
                <div style={{ width: '1280px', height: '152px', gap: '32px', border: '0px' }}>
                <div className='h2' style={{ font: 'Roboto', fontWeight: '800', fontSize: '56px', lineHeight: '61.6px', padding: '5px',color: '#0F172A'  }}>Grow your collection</div>
                    <div className='Body/L' style={{font: 'Roboto', fontWeight: '400', fontSize: '18px', lineHeight: '28.8px', color: '#0F172A', paddingTop:'22px' }}>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</div>
                </div>

                <Row style={{ width: '1150px', height: '556px', gap: '80px', background: 'transparent' ,paddingTop:'70px' }}>
                    <Col style={{ width: '100px', height: '416px', gap: '16px', display: 'flex', flexDirection: 'column' }}>

                        <Button style={{ border: '0px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)', background: '#FFFFFF', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px' ,textAlign:'left'}}>
                            <img src='images/searchVector.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginLeft: '8px', marginRight: '8px' }} />
                            Bibendum tellus
                            <img src='images/rightVector.png' width='14px' height='13.31px' style={{ top: '3px', left: '5px', marginLeft: '16px' }} />

                        </Button>
                        <Button style={{ background: 'transparent', border: '0px', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px' ,textAlign:'left'}}>
                            <img src='images/shield-check.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginRight: '8px' }} />
                            Cras eget
                        </Button>
                        <Button style={{ background: 'transparent', border: '0px', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px',textAlign:'left' }}>
                            <img src='images/rocket.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginRight: '8px' }} />
                            Dolor pharetra
                        </Button>
                        <Button style={{ background: 'transparent', border: '0px', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px' ,textAlign:'left'}}>
                            <img src='images/screen.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginRight: '8px' }} />
                            Amet, fringilla
                        </Button>
                        <Button style={{ background: 'transparent', border: '0px', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px' ,textAlign:'left'}}>
                            <img src='images/podcast.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginRight: '8px' }} />
                            Amet nibh
                        </Button>
                        <Button style={{ background: 'transparent', border: '0px', width: '256px', height: '56px', borderRadius: '8px', padding: '16px', font: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#0F172A', lineHeight: '24px', letterSpacing: '0.5px',textAlign:'left' }}>
                            <img src='images/settings-alt.png' width='18.21px' height='18.21px' style={{ top: '2.5px', left: '2.5px', marginRight: '8px' }} />
                            Sed velit
                        </Button>



                    </Col>

                    <Col style={{ width: '944px', height: '556px', gap: '10px', background: 'transparent', zIndex: '4' }}>

                        <Card style={{ flexDirection: 'column',display: 'flex',margin:'auto',  width: '759px', height: '451px', borderRadius: '20px', borderTop: '5px', background: '#FFFFFF', zIndex: '6', padding: '5px',position:'absolute'}}>
                        <NavbarWithCircle></NavbarWithCircle>
                            <Card.Img src="\images\running.jpeg" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: '100%', height: '410px', borderRadius: '1px solid', objectFit: 'cover' }} />
                        </Card>

                        <Card style={{ flexDirection: 'column',display: 'flex',margin:'auto',  width: '759px', height: '451px', borderRadius: '20px', borderTop: '5px', background: '#FFFFFF', zIndex: '7', padding: '5px',position:'relative',
                      left: '100px' , top:'100px'}}>
                        <NavbarWithCircle></NavbarWithCircle>
                            <Card.Img src="\images\3.jpeg" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: '100%', height: '410px', borderRadius: '1px solid', objectFit: 'cover' }} />
                        </Card>

                        {/* <Card style={{ flexDirection: 'column',display: 'flex',margin:'auto',  width: '759px', height: '451px', borderRadius: '20px', borderTop: '5px', background: '#FFFFFF', zIndex: '8', padding: '5px',position:'absolute',
                      left: '100px' , top:'100px'}}>
                            <Card.Img src="\images\running.jpeg" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: '100%', height: '410px', borderRadius: '1px solid', objectFit: 'cover' }} />
                        </Card> */}
                        <img src="\images\whitePicture.png" style={{zIndex:'9' , position:'absolute' , right:'9px', top:'470px'}}> 
                        </img>
                    </Col>




                </Row>
            </div>




            {/* 
            <Card style={{width:'1440px', height:'684px',border: '0px', padding:'0px'}}>
            <img src='\images\Vector 10.png'  style={ {width:'1440px', height:'684px',top:'312px'}}></img>

            </Card> */}

            {/* backgroundImage:"url('images/Vector 10.png')", backgroundSize: 'cover' */}

        </Card>

    );
}

export default Page5;