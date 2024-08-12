import './footer-info-item.styles.scss';

const FooterInfoItem = ({ title, itemsInfo }) => {
  return (
    <div className="footer-info-item-container">
      <h4 className="footer-info-item-title">{title}</h4>
      <div className="info-item-container">
        {itemsInfo.map((item, index) => (
          <div key={index} className='info-item'>
            <img src={item.icon} alt={item.alt} className='info-item__icon' />
            <div className='info-item__texts'>
              {item.texts.map((line, index) => (
                <p key={index} className='info-item__text'>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterInfoItem;