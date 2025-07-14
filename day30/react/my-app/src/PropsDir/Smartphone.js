import React from 'react'


const smartphones = [
  {
    name: 'iPhone 14',
    price: 69999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=facearea&w=200&h=200',
  },
  {
    name: 'Samsung Galaxy S23',
    price: 64999,
    image: 'https://www.ytechb.com/wp-content/uploads/2025/07/Samsung-Galaxy-Z-Fold-7-Wallpapers-1.webp',
  },
  {
    name: 'OnePlus 12',
    price: 59999,
    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-whtie.png',
  },
];

const Smartphone = () => {
  return (
    <div>
      <h1>Best Deals on SmartPhones</h1>
      <div className="smartphone-list">
        {smartphones.map((phone, idx) => (
          <div key={idx} className="smartphone-box"> 
            <img src={phone.image} alt={phone.name} className="smartphone-img" />
            <h3 className="smartphone-name">{phone.name}</h3>
            <p className="smartphone-price">From ₹{phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Smartphone
