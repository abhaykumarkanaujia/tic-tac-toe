import React from 'react';

const Square = ({ value, fnOnClick }) => {
  return (
    <>
        <button onClick={fnOnClick} className="square">{value}</button>
    </>
  )
}

export default Square