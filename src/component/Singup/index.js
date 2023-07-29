import React, { useState } from 'react';
import './index.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
  };

  return (

    <div className='signinContainer'>
          <h2>Create an account on it</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Phone number</label>
        <input type="tel" name="phone" onChange={handleChange} />
      </div>
      <div>
        <label>Profession</label>
        <select name="profession" onChange={handleChange}>
          <option value="">Select Profession</option>
          <option value="Engineer">student</option>
          <option value="Doctor">job seeker</option>
          <option value="Teacher">employe</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  
  );
};

export default Signup;
