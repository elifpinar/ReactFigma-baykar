
import React from 'react';
import HeaderTheBest from './headerthebest';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Card4 from './card4';
import Rectangle281 from './figures/rectangle281';
import Slider from './slider';
import { Button } from 'react-bootstrap';
import './page4.css';
import { useRef } from 'react';

function Page4() {


    const sliderElements = [
        {

            'header':'images/Iconsimsek.png',
            'content':'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
            'footerImg':'images/UserThumb.png',
            'footerTxtH':'Ralph Edwards',
            'footerTxtC':'Product Designer'
        },
        {

            'header':'images/Iconsimsek.png',
            'content':'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            'footerImg':'images/UserThumb.png',
            'footerTxtH':'Hellen Jummy',
            'footerTxtC':'Team Lead'
        },{

            'header':'images/2cardIcon.png',
            'content':'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
            'footerImg':'images/3UserThumb.png',
            'footerTxtH':'Hellena Johny',
            'footerTxtC':'Co-founder'
        },{

            'header':'images/3cardIcon.png',
            'content':'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
            'footerImg':'images/4UserThumb.png',
            'footerTxtH':'David Oshodi',
            'footerTxtC':'Manager'
        },{

            'header':'images/Iconsimsek.png',
            'content':'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
            'footerImg':'images/UserThumb.png',
            'footerTxtH':'Charolette Hanlin',
            'footerTxtC':'CEO'
        },
    ]


    const ref = useRef(null);


    const scrolhareket = (scrollOffset) => {

        ref.current.scrollIntoView({ behavior: 'smooth' })
        ref.current.scrollLeft += scrollOffset;
    };





    return (

        <div style={{ flexDirection: 'column', display: 'flex', width: '1440px', height: '732px', padding: '80px ', gap: '80px', background: '#fffaf0', border: '0px' }}>


            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '1280px', height: '62px', background: '#fffaf0' }}>

                <div className='Heading/2' style={{ display: 'flex', width: '1112px', height: '62px', gap: '32px', background: '#fffaf0', font: 'Roboto', fontWeight: '800', fontSize: '56px', lineHeight: '61.6px', marginBottom: '5px' }}>
                    Because they love us
                </div>

                <div style={{ display: 'flex', width: '120px', height: '48px', gap: '24px' }}>

                    <Button onClick={() => scrolhareket(-320)} variant="outline-secondary" style={{ color: '#78350F', fontFamily: 'Roboto Button/L', borderPadding: '12px', width: '48px', height: '48px', borderRadius: '24px', border: '2px solid #78350F' }}>
                        <img src='images/arrow-left.png' width='24px' height='24px' />
                    </Button>


                    <Button onClick={() => scrolhareket(320)} variant="outline-secondary" style={{ color: '#78350F', fontFamily: 'Roboto Button/L', borderPadding: '12px', width: '48px', height: '48px', borderRadius: '24px', border: '2px solid #78350F' }}>
                        <img src='images/arrow-right.png' width='24px' height='24px' />
                    </Button>

                </div>
            </div>


            <div style={{ backgroundImage: "url('images/Rectangle28.png')", paddingTop: '28px', display: 'flex', width: '1280px', height: '421px' }}>

                <div id='slider' ref={ref} style={{ background: 'transparent', marginLeft: '-80px', marginRight: '-160px', overflowX: 'hidden', overflowY: 'hidden', flexDirection: 'row', display: 'flex', gap: '24px', width: '1440px', height: '450px' }}>


                    {sliderElements.map((x, id) => {
                        return (

                            <div key={id} style={{ padding: '32px', gap: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', width: '384px', height: '430px', background: '#FFFFFF', borderRadius: '20px', border: 'solid 1px #E2E8F0', boxShadow: '0px 6px 15px -3px rgba(0,0,0,0.7)' }}>
                                <div style={{ textAlign: 'left', width: '320px', height: '64px', padding: '16px 0px 16px 0px' }}>
                                    <img src={x.header} width='320px' height='64px' />
                                </div>
                                <div style={{ textAlign: 'left', width: '320px', height: '190px', padding: '5px', fontSize: '24px', fontWeight: '400px', lineHeight: '38.4px', fontStyle: 'Roboto' }}>
                                    {x.content}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'left', width: '320px', height: '80px', padding: '16px 0px 0px 0px', gap: '16px' }}>
                                    <div>
                                        <img src={x.footerImg} width='64px' height='64px' style={{ gap: '10px', borderRadius: '100px' }} />
                                    </div>
                                    <div style={{ alignSelf: 'center' }}>
                                        <span style={{ display: 'flex', fontSize: '18px', fontWeight: '400', lineHeight: '28.8px', font: 'Roboto' }}>{x.footerTxtH}
                                        </span>
                                        <span style={{ display: 'flex', fontSize: '16px', fontWeight: '400', lineHeight: '22.4px', font: 'Roboto', color: '#475569' }}>{x.footerTxtC}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}







                </div>

            </div>





        </div>
    );
}

export default Page4;