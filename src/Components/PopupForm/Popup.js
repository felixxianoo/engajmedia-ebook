import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popupStyles from './Popup.module.css';


function PopupForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
 
  return (
    <div className={popupStyles["popup"]}>
      <div className={popupStyles["popup-content"]}>
        <span className={popupStyles["close-button"]} onClick={onClose}>
          &times;
        </span>
        <h2>Get your free eBook!</h2>
        <form className={popupStyles['form-properties']} onSubmit={handleSubmit}>
          <input className={popupStyles['form-input']}
          placeholder='Name'
          type="text" 
          value={name}
            onChange={handleNameChange}
          required/>
          <input className={popupStyles['form-input']}
          placeholder='Email'
           type="email" value={email} onChange={handleEmailChange} required />
           <label className={popupStyles['checkbox-label']}>
           <input type='checkbox' required />
           I have read and agree to Engaj Media's <Link to='/privacy-policy' target={'_blank'} rel="noopener noreferrer"> Privacy Policy</Link>
           </label>
          <button type="submit">Download now</button>
          
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
