import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
import MediaQuery from 'react-responsive';
import MobileNavigation from '../components/MobileNavigation';
function ErrorPage() {
  const error = useRouteError();
  let title = 'An error occured!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MediaQuery minWidth={640}>
        <MainNavigation />
      </MediaQuery>
      <MediaQuery maxWidth={639}>
        <MobileNavigation />
      </MediaQuery>
      <PageContent title={title}>
        <h1>{message}</h1>
      </PageContent>
    </>
  );
}

export default ErrorPage;
