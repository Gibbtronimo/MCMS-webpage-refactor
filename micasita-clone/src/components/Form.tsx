import React, { useState } from 'react';

interface FormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  [key: string]: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
      {/* Form fields will be implemented based on specific requirements */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
        />
      </div>
      
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
