import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import IconShoppingCartLine from './icons/shopping-cart';
import Rectangle261 from './figures/rectangle261';
import Rectangle251 from './figures/rectangle251';
import Rectangle271 from './figures/rectangle271';
import Rectangle2511 from './figures/rectangle2511';
import Rectangle2611 from './figures/rectangle2611';
function CardsGroup2() {
  return (
    <div style={{ display: 'flex', gap: '48px', height: '472px', width: '1280px', background: '#0F172A', border: '1px solid #0F172A', zIndex: '2', position: 'relative' }}>
      <Rectangle261 />
      <Rectangle251 />
      <Rectangle271 />
      <Rectangle2511 />
      <Rectangle2611/>
    
      
      <Card style={{ boxShadow: '0px 5px 10px 0px rgba(255,255,255,0.5)', width: '394.67px', height: '472px', borderRadius: '10px', border: '1px solid #0F172A', background: '#0F172A', zIndex: '6' }}>
        <Card.Img src="\images\nike2.jpeg" style={{ width: '394.67px', height: '220px', borderRadius: '4px', objectFit: 'cover' }} />
        <Card.Body style={{ color: '#FFFFFF' }}>
          <Card.Title>Title</Card.Title>
          <Card.Text>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</Card.Text>
        </Card.Body>
        <div style={{ width: '394.67px', height: '120px', gap: '16px', padding: '32px' }}>
          <Button variant="outline-secondary" style={{ color: '#FFFFFF', font: 'Roboto/XL', borderPadding: '0px 16px 0px 16px', paddingBlock: '16px', fontWeight: '700', fontSize: '24px', lineHeight: '24px', minWidth: '330.67px', borderRadius: '8px', border: '2px solid #FFFFFF' }}>
            <IconShoppingCartLine style={{ marginRight: '12px' }} /> Buy Now
          </Button>
        </div>
      </Card>
      <Card style={{ boxShadow: '0px 5px 10px 0px rgba(255,255,255,0.5)', width: '394.67px', height: '472px', borderRadius: '10px', border: '1px solid #0F172A', background: '#0F172A', zIndex: '6' }}>
        <Card.Img src="\images\3.jpeg" style={{ width: '394.67px', height: '220px', borderRadius: '4px', objectFit: 'cover' }} />
        <Card.Body style={{ color: '#FFFFFF' }}>
          <Card.Title>Title</Card.Title>
          <Card.Text>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</Card.Text>
        </Card.Body>
        <div style={{ width: '394.67px', height: '120px', gap: '16px', padding: '32px' }}>
          <Button variant="outline-secondary" style={{ color: '#FFFFFF', font: 'Roboto/XL', borderPadding: '0px 16px 0px 16px', paddingBlock: '16px', fontWeight: '700', fontSize: '24px', lineHeight: '24px', minWidth: '330.67px', borderRadius: '8px', border: '2px solid #FFFFFF' }}>
            <IconShoppingCartLine style={{ marginRight: '12px' }} /> Buy Now
          </Button>
        </div>
      </Card>
      <Card style={{ boxShadow: '0px 5px 10px 0px rgba(255,255,255,0.5)', width: '394.67px', height: '472px', borderRadius: '10px', border: '1px solid #0F172A', background: '#0F172A', zIndex: '6' }}>
        <Card.Img src="\images\converse3.jpeg" style={{ width: '394.67px', height: '220px', borderRadius: '4px', objectFit: 'cover' }} />
        <Card.Body style={{ color: '#FFFFFF' }}>
          <Card.Title>Title</Card.Title>
          <Card.Text>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</Card.Text>
        </Card.Body>
        <div style={{ width: '394.67px', height: '120px', gap: '16px', padding: '32px' }}>
          <Button variant="outline-secondary" style={{ color: '#FFFFFF', font: 'Roboto/XL', borderPadding: '0px 16px 0px 16px', paddingBlock: '16px', fontWeight: '700', fontSize: '24px', lineHeight: '24px', minWidth: '330.67px', borderRadius: '8px', border: '2px solid #FFFFFF' }}>
            <IconShoppingCartLine style={{ marginRight: '12px' }} /> Buy Now
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CardsGroup2;
