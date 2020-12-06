import React from 'react';
import { NavigationContainer } from '../../atoms';
import { NavigationItem } from '../../molecules';
import { useAuthentication } from "../../../hooks/authentication";

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuthentication();

  return (
    <NavigationContainer>
      <NavigationItem exact link="/">Home</NavigationItem>
      {isAuthenticated && (
        <>
          <NavigationItem exact link="/blog">Blog</NavigationItem>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {!isAuthenticated && (
        <NavigationItem exact link="/login">Login</NavigationItem>
      )}
    </NavigationContainer>
  );
};