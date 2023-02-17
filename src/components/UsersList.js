import { useState } from 'react';
import SingleUser from './SingleUser';

import classes from './UsersList.module.css';

function UsersList({ users }) {
  const [searchInput, setSearchInput] = useState('');
  users = users.sort((user, user1) => user.id - user1.id);
  const handleChange = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  if (searchInput.length > 0) {
    users = users.filter(user => {
      return user.username.match(searchInput);
    });
  }
  return (
    <div className={classes.users}>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        className={classes.search}
      />
      <h1>All Users</h1>
      <ul className={classes.list}>
        {users.map(user => (
          <li key={user.id} className={classes.item}>
            <SingleUser user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
