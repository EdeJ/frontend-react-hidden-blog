import React from "react";
import { useForm } from "react-hook-form";
import { Redirect, useLocation } from "react-router-dom";
import { Heading, Button } from '../../components/atoms';
import { InputField } from '../../components/molecules';
import { useAuthentication } from "../../hooks/authentication";


// Vamn het daadwerkelijke formulier hadden we een organism kunnen maken.
// Echter wordt deze alleen maar op deze pagina gebruikt en kun je er voor kiezen om dit in/bij de pagina te laten
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
          <Heading level="h1">Login</Heading>

          <form onSubmit={handleSubmit(onSuccess)}>
            <InputField name="username" label="Naam" fieldRef={register} />
            <InputField type="password" name="password" label="Wachtwoord" fieldRef={register} />
            <Button>Login</Button>
          </form>
        </div>
      )}
    </>
  );
};
