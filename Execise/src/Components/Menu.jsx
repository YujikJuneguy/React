import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      {menuItems.map(item => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
