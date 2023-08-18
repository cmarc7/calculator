import React from 'react';
import '../hojas-de-estilo/Clear.css';

const Clear = ({ clear })=> (
    <div className='button-clear' onClick={clear}>
      C
    </div>
  );

export default Clear;