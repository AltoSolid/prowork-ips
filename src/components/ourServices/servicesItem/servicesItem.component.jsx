import './servicesItem.styles.scss';

const ServicesItem = ({icon, text, alt}) => {
  return (
    <div className="service-item">
      <img src={icon} alt={alt} />
      <span>{text}</span>
    </div>
  );
}

export default ServicesItem;