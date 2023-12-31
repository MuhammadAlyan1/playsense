import React, { useState } from 'react';
import IconTextField from '../ui/IconTextField';
import EmailIcon from '../../assets/icons/misc/email.svg?react';
import PasswordIcon from '../../assets/icons/misc/password.svg?react';
import { Link } from 'react-router-dom';
import PathfinderImage from '../../assets/characters/pathfinder.svg?react';

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      console.log('Please enter all fields');
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  };

  return (
    <div className="signin">
      <form className="signin__form" onSubmit={(e) => handleSignin(e)}>
        <label htmlFor="email" className="signin__label">
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
        <label htmlFor="password" className="signin__label">
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
        <div className="signin__additional-settings">
          <div className="signin__checkbox-container">
            <input
              id="remember-me"
              type="checkbox"
              className="signin__checkbox"
              checked={isRememberMeChecked}
              onChange={() => setIsRememberMeChecked((prev) => !prev)}
            />
            <label htmlFor="remember-me" className="signin__checkbox-label">
              Remember Me
            </label>
          </div>
          <Link to="#" className="signin__forgot-password">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="signin__signin-button"
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Sign In'}
        </button>
        <p className="signin__signup-call-to-action">
          Not registered yet?{' '}
          <Link to="/signup" className="signin__signup-link">
            Create Account
          </Link>
        </p>
      </form>
      <div className="signin__contents">
        <h1 className="signin__heading">
          Welcome Back to <br />
          <span className="signin__heading-span">PlaySense</span>
        </h1>
        <p className="signin__description">
          Please sign in to your account to access all of your information
        </p>
      </div>
      <PathfinderImage className="signin__character-image" />
    </div>
  );
};

export default Signin;
