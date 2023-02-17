import { useRouteLoaderData } from 'react-router-dom';
import PageContent from '../components/PageContent';

function HomePage() {
  const token = useRouteLoaderData('root');
  return (
    <PageContent
      title={`Welcome${token ? ' ' + localStorage.getItem('username') : ''}!`}
    >
      <h1>This is your Home Page!</h1>
      {token ? (
        <h2>You can see a list of all users</h2>
      ) : (
        <h2>Login to see more!</h2>
      )}
    </PageContent>
  );
}

export default HomePage;
