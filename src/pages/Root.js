import MediaQuery from 'react-responsive';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import MobileNavigation from '../components/MobileNavigation';
function RootLayout() {
  return (
    <>
      <MediaQuery minWidth={640}>
        <MainNavigation />
      </MediaQuery>
      <MediaQuery maxWidth={639}>
        <MobileNavigation />
      </MediaQuery>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
