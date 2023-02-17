import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const token = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Emphasoft Test</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Starting Page
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Users
                </NavLink>
              </li>
              <li>
                <Form action="/logout" method="post">
                  <div className={classes.actions}>
                    <button>Logout</button>
                  </div>
                </Form>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
