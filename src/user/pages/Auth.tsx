import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../shared/components/UI/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import AuthContext from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import { useHttpClient } from '../../shared/hooks/http-hook';

const Auth = () => {
  const authContext = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: { value: '', isValid: false },
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid,
        isLoginMode
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_BACKEND_URL}/users/login`,
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { 'Content-Type': 'application/json' } // without this the backend does not know what type of data they are receiving
        );
        console.log('responseData', responseData);

        authContext.login(responseData.userId, responseData.token);
        navigate('/');
      } catch (err) {}
    } else {
      // signUp mode
      try {
        const formData = new FormData();
        formData.append('name', formState.inputs.name.value);
        formData.append('email', formState.inputs.email.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value); // image key is expected in BE

        console.log(
          'formState.inputs.image.value',
          formState.inputs.image.value
        );
        const responseData = await sendRequest(
          `${process.env.REACT_BACKEND_URL}/users/signup`,
          'POST',
          formData // no need to set headers manually when sending FormData
        );

        authContext.login(responseData.userId, responseData.token);
        navigate('/');
      } catch (error) {}
    }
  };

  return (
    <div className="pb-4">
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication p-4 m-14 shadow-lg h-auto w-1/4">
        {isLoading && <LoadingSpinner asOverlay />}

        <h2 className="text-xl pb-4">
          Login bellow or <b>switch to signup</b>
        </h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}

          {!isLoginMode && (
            <div className="flex items-center justify-center">
              <ImageUpload
                id="image"
                onInput={inputHandler}
                errorText="Please provide an image."
              />
            </div>
          )}

          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button
            type="submit"
            className="mx-auto table mb-4"
            disabled={!formState.isValid}
          >
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button
          className="mx-auto table bg-orange-600 hover:bg-orange-500"
          onClick={switchModeHandler}
        >
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
