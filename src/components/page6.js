
import HeaderTheBest from './headerthebest';
import { Card, CardGroup, Text, Col } from 'react-bootstrap';

function Page6() {
    return (
        <div style={{
            width: '1440px',
            height: '717px',
            padding: '80px',
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingLeft: '80px',
            paddingRight: '80px',
            borderStyle: 'solid',
            borderWidth: '1px 0px 1px 0px',
            borderColor: '#78350F',
            gap: '80px',
            background: '#78350F',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            
        }}>
            <div className='head-text'>
                 <div className=''head-image>
                {/* <img src='images/lastPicture.png' style={{ width: '256px', height: '200px', border: '5px', gap: '10px', position: 'absolute', zIndex: '3' ,top:'89px',left:'220px'}}></img> */}
                </div >
                
                {/* <h3 className='Subtitle/S'style={{fontFamily:'Roboto ',width: '215px',fontWeight:'500',fontSize:'14px',lineHeight:'15.4px',  position: 'absolute', zIndex: '3' ,top:'260px',left:'240px', background:'white',padding:'9px 11px 8px 12px'}}>
                Emma Simpson collected one pair of Cool Shoes.</h3>  */}

                <img src='images/col.png' style={{position: 'absolute', zIndex: '3',left:'18px', top:'10px', border: '5px', gap: '10px', position: 'absolute', zIndex: '3' ,top:'10px',left:'200px' }}></img>
                </div>
                
            

            <img src='images/Group.png' style={{ width: '1049px', height: '633px', opacity: '0.5', position: 'absolute', zIndex: '1' }}></img>

            <img src='images/Ellipses.png' style={{ width: '724px', height: '455px', position: 'absolute', zIndex: '2' }}></img>

            {/* <div style={{ width: '1280px', height: '176px', gap: '32px', position: 'absolute' }}> */}
            <div style={{  height: '176px', position: 'absolute' }}>

                <div style={{
                    width: '1280px', height: '106px', fontWeight: '800', fontSize: '96px', lineHeight: '105.6px', padding: '5px', alignContent: 'center', color: '#FFFBEB', display: 'flex', justifyContent: 'center',
                    zIndex: '3',
                    position: 'relative'
                }}>
                    11,658,467
                </div>
                <div style={{
                    width: '1280px', height: '106px', fontWeight: '800', fontSize: '56px', lineHeight: '61.6px', padding: '5px', alignContent: 'center', color: '#FFFBEB', display: 'flex', justifyContent: 'center',
                    zIndex: '3',
                    position: 'absolute'
                }}>
                    Shoes Collected
                </div>

            </div>




        </div>
    );
}

export default Page6;