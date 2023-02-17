import { useState } from 'react';
import classes from './SingleUser.module.css';
function SingleUser({ user }) {
  const [isFullUsername, setIsFullUsername] = useState(false);
  const toggleUsernameHandler = () => {
    setIsFullUsername(prevState => !prevState);
  };

  let usernameButton;
  if (user.username.length > 15 && !isFullUsername) {
    usernameButton = <button onClick={toggleUsernameHandler}>Show full</button>;
  } else if (user.username.length > 15 && isFullUsername) {
    usernameButton = <button onClick={toggleUsernameHandler}>Hide full</button>;
  }

  return (
    <div className={classes.user}>
      <div className={classes.content}>
        <h2>
          Username:{' '}
          {!isFullUsername ? user.username.slice(0, 15) : user.username}
        </h2>
        {usernameButton}
        <p>First Name: {user['first_name'] || 'unknown'}</p>
        <p>Last Name: {user['last_name'] || 'unknown'}</p>
        <p>
          Last Login:{' '}
          {user.last_login
            ? new Date(user.last_login).toLocaleTimeString()
            : 'The last login is unknown'}
        </p>
        <h3
          className={`${classes.badge} ${
            user.is_active ? classes.active : classes.inactive
          }`}
        >
          {user.is_active ? 'Active' : 'Inactive'}
        </h3>
      </div>
    </div>
  );
}

export default SingleUser;
