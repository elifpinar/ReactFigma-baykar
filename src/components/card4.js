import React from 'react';

const Card = () => {
  return (
    <div className="card" style={cardStyle}>
      <div className="content" style={contentStyle}>
        <div className="header" style={headerStyle}>
          Başlık
        </div>
        
        <div className="text" style={textStyle}>
          <p>Metin kısmı</p>
        </div>
        <div className="profile" style={profileStyle}>
          <img src="https://via.placeholder.com/50" alt="Profil Resmi" style={imageStyle} />
          <div className="profile-info" style={profileInfoStyle}>
            <p>İsim Soyisim</p>
            <p>Meslek</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  width: '384px',
  height: '430px',
  borderRadius: '20px',
  border: '1px solid #E2E8F0',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.07), 0px 10px 15px -3px rgba(0,0,0,0.1)',
};

const contentStyle = {
  padding: '20px',
};

const headerStyle = {
  textAlign: 'left',
  paddingBottom: '20px',
};

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  borderRadius: '50%',
  marginRight: '10px',
};

const profileInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const textStyle = {
  marginTop: '20px',
};

export default Card;
