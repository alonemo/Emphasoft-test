import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function LoginPage() {
  return <AuthForm />;
}

export default LoginPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    username: data.get('username'),
    password: data.get('password'),
  };
  const response = await fetch(
    'https://test-assignment.emphasoft.com/api/v1/login/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    }
  );
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user!' }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem('token', token);
  localStorage.setItem('username', data.get('username'));
  return redirect('/');
}
