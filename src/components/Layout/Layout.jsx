import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, StyledLink, LoaderContainer } from './Layout.styled';
import { Oval } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
      </Header>
      <main>
        <Suspense
          fallback={
            <LoaderContainer>
              <Oval
                height="80"
                width="80"
                color="#ff0068"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </LoaderContainer>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;