import React from 'react';

const CardDisplay = () => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const boxStyle = {
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '200px', // Adjust the width as needed
  };

  const greenBox = {
    ...boxStyle,
    backgroundColor: '#4CAF50', // Replace with the exact color from your design
  };

  const blueBox = {
    ...boxStyle,
    backgroundColor: '#00BCD4', // Replace with the exact color from your design
  };

  const textStyle = {
    color: 'white',
    margin: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={greenBox}>
        <p style={textStyle}>Links Criados</p>
        <h2 style={textStyle}>285</h2>
      </div>
      <div style={blueBox}>
        <p style={textStyle}>Total</p>
        <h2 style={textStyle}>R$5,000.00</h2>
      </div>
    </div>
  );
};

export default CardDisplay;
