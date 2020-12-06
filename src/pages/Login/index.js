import React from "react";
import { useForm } from "react-hook-form";
import { Redirect, useLocation } from "react-router-dom";
import { useAuthentication } from "../../hooks/authentication";

export const Login = () => {
  const { login, isAuthenticated } = useAuthentication();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const onSuccess = ({username, password}) => {
    login(username, password);
  };

  return (
    <>
      {isAuthenticated ? (
        <Redirect to={location.state.from || '/blog'} />
      ) : (
        <div className="App">
          <h1>Login</h1>
          <code>Username: username</code>

          <form onSubmit={handleSubmit(onSuccess)}>
            <div>
              <label htmlFor="username">Gebruikersnaam</label>
              <input type="text" name="username" id="username" ref={register} />
            </div>
            <div>
              <label htmlFor="password">Wachtwoord</label>
              <input type="password" name="password" id="password" ref={register} />
            </div>
            <button>Login</button>
          </form>
        </div>
      )}
    </>
  );
};
