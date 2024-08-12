import './highlightedService.styles.scss';

const HighlightedService = ({icon, text, alt}) => {
  return (
    <div className="highlighted-service-container">
      <img src={icon} alt={alt} className='highlighted-service-icon'/>
      <span className='highlighted-service-text'>{text}</span>
    </div>
  );
}

export default HighlightedService;