import React from 'react';

const Button = ({ style, children, onClick }) => (
  <button style={style} onClick={onClick}>
    {children}
    <style jsx>{`
      button {
        width: 100%;
        height: 40px;
        background-color: black;
        color: white;
        cursor: pointer;
        border: 0;
        border-radius: 20px;
        font-size: 15px;
        margin: 10px 0;
      }
    `}</style>
  </button>
);

Button.propTypes = {};

export default Button;
