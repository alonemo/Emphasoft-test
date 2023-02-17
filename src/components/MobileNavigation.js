import { useState } from 'react';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './MobileNavigation.module.css';

function MobileNavigation() {
  const token = useRouteLoaderData('root');
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(prevState => !prevState);
  };
  return (
    <>
      {showNav && (
        <div className={classes.backdrop} onClick={showNavHandler}></div>
      )}
      <header className={classes.header}>
        <div>
          <button className={classes['toggle-button']} onClick={showNavHandler}>
            <span className={classes['toggle-button__bar']}></span>
            <span className={classes['toggle-button__bar']}></span>
            <span className={classes['toggle-button__bar']}></span>
          </button>
        </div>
        <div className={classes['mobile-logo']}>Auth test</div>
        {showNav && (
          <nav className={classes['mobile-nav']}>
            <ul className={classes['mobile-nav__items']}>
              <li className={classes['mobile-nav__item']}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                  onClick={showNavHandler}
                >
                  Starting Page
                </NavLink>
              </li>
              {!token && (
                <li className={classes['mobile-nav__item']}>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    end
                    onClick={showNavHandler}
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {token && (
                <>
                  <li className={classes['mobile-nav__item']}>
                    <NavLink
                      to="/users"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                      end
                      onClick={showNavHandler}
                    >
                      Users
                    </NavLink>
                  </li>
                  <li className={classes['mobile-nav__item']}>
                    <Form
                      action="/logout"
                      method="post"
                    >
                      <div className={classes.actions}>
                        <button>Logout</button>
                      </div>
                    </Form>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default MobileNavigation;
