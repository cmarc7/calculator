import React from 'react';
import '../hojas-de-estilo/Button.css';

function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return (
    <div className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trim()} onClick={()=>props.handlerClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;