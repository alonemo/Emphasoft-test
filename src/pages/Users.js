import { Suspense } from 'react';
import { useLoaderData, json, defer, Await, redirect } from 'react-router-dom';
import UsersList from '../components/UsersList';
import { getAuthToken } from '../util/auth';

function UsersPage() {
  const { users } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={users}>
        {loadedUsers => <UsersList users={loadedUsers} />}
      </Await>
    </Suspense>
  );
}

export default UsersPage;

async function loadUsers() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  const response = await fetch(
    'https://test-assignment.emphasoft.com/api/v1/users/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      },
    }
  );

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({ users: loadUsers() });
}
