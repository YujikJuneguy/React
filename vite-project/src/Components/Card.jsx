import React from 'react';

const Card = ({title,desc,imgSrc}) => {
  return (
    <div className='card'>
    <img src = {imgSrc} alt="picture" />
    <h4>{title}</h4>
   <p>{desc}</p>
</div>  
  );
};

export default Card;
