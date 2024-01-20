import React, { useState } from 'react';
import IconTextField from '../ui/IconTextField';
import EmailIcon from '../../assets/icons/misc/email.svg?react';
import PasswordIcon from '../../assets/icons/misc/password.svg?react';
import UsernameIcon from '../../assets/icons/misc/person.svg?react';
import { Link } from 'react-router-dom';
import WraithImage from '../../assets/characters/wraith.svg?react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password || !username) {
      console.log('Please enter all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        '/users/signup',
        {
          email: email.toLowerCase(),
          username,
          password
        },
        {
          withCredentials: true
        }
      );
      console.log(response);

      if (response?.data?.success === true) {
        console.log('SIGNUP->RESPONSE->DATA->USER: ', response?.data?.data);
        authContext?.setAuth(response?.data?.data);
        navigate('/');
      }
    } catch (error) {
      console.log('There was an issue while trying to signup: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={(e) => handleSignup(e)}>
        <label htmlFor="email" className="signup__label">
          Email
        </label>
        <IconTextField
          placeholder="Enter your email"
          isRequired={true}
          Icon={EmailIcon}
          value={email}
          setValue={setEmail}
          id="email"
          type="email"
        />
        <label htmlFor="username" className="signup__label">
          Username
        </label>
        <IconTextField
          placeholder="Enter your username"
          isRequired={true}
          Icon={UsernameIcon}
          value={username}
          setValue={setUsername}
          id="username"
          type="text"
        />
        <label htmlFor="password" className="signup__label">
          Password
        </label>
        <IconTextField
          placeholder="Enter your password"
          isRequired={true}
          Icon={PasswordIcon}
          value={password}
          setValue={setPassword}
          id="password"
          type="password"
        />
        <div className="signup__additional-settings">
          <div className="signup__checkbox-container">
            <input
              id="remember-me"
              type="checkbox"
              className="signup__checkbox"
              checked={isRememberMeChecked}
              onChange={() => setIsRememberMeChecked((prev) => !prev)}
            />
            <label htmlFor="remember-me" className="signup__checkbox-label">
              Remember Me
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="signup__signin-button"
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Sign Up'}
        </button>
        <p className="signup__signup-call-to-action">
          Already have an account?{' '}
          <Link to="/signin" className="signup__signup-link">
            Sign in
          </Link>
        </p>
      </form>
      <div className="signup__contents">
        <h1 className="signup__heading">
          Join the <span className="signup__heading-span">PlaySense</span>{' '}
          <br /> Community
        </h1>
        <p className="signup__description">
          Make PlaySense your personal playground! Sign up to access amazing
          features.
        </p>
      </div>
      <WraithImage className="signup__character-image" />
    </div>
  );
};

export default Signup;
