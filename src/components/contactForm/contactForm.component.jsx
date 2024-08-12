import FormImage from '../../assets/imgs/form-img.webp';

import './contactForm.styles.scss';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <img src={FormImage} alt="Form image" className="contact-form-image" />
      <div className="contact-form-content">
        <h2>Envíanos un mensaje</h2>
        <p>y un asesor se pondrá en contacto</p>
        <form>
          <input type="text" placeholder="Nombre o Razón Social" required />
          <select required defaultValue="">
            <option value="" disabled hidden>Tipo de persona</option>
            <option>Natural</option>
            <option>Jurídica</option>
          </select>
          <select required defaultValue="">
            <option value="" disabled hidden>Tipo de identificación</option>
            <option>Cédula</option>
            <option>NIT</option>
          </select>
          <input type="text" placeholder="No. de Identificación" required />
          <input 
            type="tel" 
            placeholder="Teléfono" 
            required 
            pattern="[0-9]+" 
            inputMode="numeric" 
          />
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
