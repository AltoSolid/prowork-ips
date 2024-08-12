import React from 'react';
import './footer-info-item.styles.scss';

const FooterInfoItem = ({ title, itemsInfo }) => (
  <div className="footer-info-item">
    <h4 className="footer-info-title">{title}</h4>
    {itemsInfo.map((item, idx) => (
      <div className="info-item" key={idx}>
        <img src={item.icon} alt={item.alt} className="info-item-icon" />
        <span className="info-item-texts">
          {item.texts.map((text, i) => (
            <div key={i} className="info-item-text">{text}</div>
          ))}
        </span>
      </div>
    ))}
  </div>
);

export default FooterInfoItem;
