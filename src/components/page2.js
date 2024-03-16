
import CardsGroup2 from './cardsgroup2';
import HeaderTheBest from './headerthebest';
import { Card, CardGroup } from 'react-bootstrap';

function Page2() {
  return (
    <Card style={{width:'1440px',height:'776px' , padding:'80px',gap:'80px',background:'#0F172A',borderRadius: '0',zIndex:'1' }}> 
      <HeaderTheBest></HeaderTheBest>
      <CardsGroup2></CardsGroup2>

    </Card>
  );
}

export default Page2;