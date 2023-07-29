import React, { useState } from 'react';
import './index.css';


const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
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
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === formData.name && storedUser.password === formData.password) {
      onLogin();
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
    <div className='loginContainer'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">Log In</button>
      <p>If you don't have an account please Create an account </p>
    </form>
    </div>
    </>
  );
};

export default Login;
