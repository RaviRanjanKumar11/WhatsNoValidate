// src/components/WhatsappValidator.jsx
import React, { useState } from 'react';
import validateWhatsappNumber from '../services/whatsappService';

const WhatsappValidator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [error, setError] = useState(null);

  const handleValidation = async () => {
    try {
      const data = await validateWhatsappNumber(phoneNumber);
      
      if (data.status === 'valid') {
        setValidationMessage('The phone number is valid and associated with a WhatsApp account.');
      } else if (data.status === 'invalid') {
        setValidationMessage('The phone number is invalid or not associated with a WhatsApp account.');
      } else {
        setValidationMessage('Unexpected response received.');
      }

      setError(null);
    } catch (err) {
      setError('An error occurred while validating the number.');
      setValidationMessage('');
    }
  };

  return (
    <div>
      <h1>WhatsApp Number Validator</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleValidation}>Validate</button>

      {validationMessage && (
        <div>
          <h2>Validation Result</h2>
          <p>{validationMessage}</p>
        </div>
      )}

      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default WhatsappValidator;
