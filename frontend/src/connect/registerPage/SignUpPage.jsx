import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useToken } from '../../auth/useToken';
import axios from 'axios';

const SignUpPage = () => {
    const [token, setToken] = useToken();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
      const response = await axios.post('/api/signup', {
        email: emailValue,
        password: passwordValue,
      });
      const {token} = response.data;
      setToken(token);
      navigate('/please-verify');
    }

  return (
    <div className='content-container'>
      <h1>Sign Up</h1>
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder='Email Address'
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type= 'password'
        placeholder='Password'
      />
      <input
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        type= 'password'
        placeholder='Confirm Password'
      />
      <button
        disabled={
            !emailValue || !passwordValue ||
            passwordValue !== confirmPasswordValue
        } 
        onClick={onSignUpClicked}>Validez votre inscription !</button>
      <button
        onClick={() => navigate('/login')}>Already registered? Log In</button>
    </div>
  )
}

export default SignUpPage;