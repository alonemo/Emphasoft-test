import { useRef, useState } from 'react';
import { Form, useNavigation } from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {
  const navigation = useNavigation();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const checkUsernameHandler = () => {
    const enteredUsername = usernameRef.current.value;
    if (
      enteredUsername.length < 1 ||
      enteredUsername.length > 150 ||
      !/^[\w.@+-]+$/.test(enteredUsername)
    ) {
      setUsernameIsValid(false);
    } else {
      setUsernameIsValid(true);
    }
  };

  const checkPasswordHandler = () => {
    const enteredPassword = passwordRef.current.value;
    if (
      enteredPassword.length > 128 ||
      !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(enteredPassword)
    ) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Log in</h1>
        {!usernameIsValid && <p>Please enter a valid username</p>}
        <p className={usernameIsValid ? '' : classes.invalid}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            required
            onBlur={checkUsernameHandler}
            ref={usernameRef}
          />
        </p>
        {!passwordIsValid && (
          <p>
            Please enter a valid password (the password must be more than 8
            characters, contain capital letters and numbers )
          </p>
        )}
        <p className={passwordIsValid ? '' : classes.invalid}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            onBlur={checkPasswordHandler}
            ref={passwordRef}
          />
        </p>
        <div className={classes.actions}>
          <button disabled={isSubmitting || !usernameIsValid || !passwordIsValid}>
            {isSubmitting ? 'Logging in' : 'Login'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
