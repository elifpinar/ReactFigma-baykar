import { Navbar } from 'react-bootstrap';

const NavbarWithCircle = () => {
  return (
    <Navbar style={{ width:'488px',height:'41px',background: '#FFFFFF', gap:'5px',position: 'relative', padding:'8px 16px 8px 16px' }}>
      <div style={{
        display: 'inline-block',
        marginRight: '10px',
        width: '10px',
        height: '10px',
        background: '#E11D48',
        borderRadius: '50%',
      }}></div>
      <div style={{
        display: 'inline-block',
        marginRight: '10px',
        width: '10px',
        height: '10px',
        background: '#FBBF24',
        borderRadius: '50%',
      }}></div>
      <div style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        background: '#22C55E',
        borderRadius: '50%',
      }}></div>
      
    </Navbar>
  );
}

export default NavbarWithCircle;
