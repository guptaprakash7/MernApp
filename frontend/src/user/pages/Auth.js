import React, { useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/Validator";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";

const Authenticate = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      userEmail: {
        value: "",
        isValid: false,
      },
      userEmail: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.userEmail.isValid &&
          formState.inputs.userPassword.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr></hr>
      <form onSubmit={onSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          ></Input>
        )}
        <Input
          id="userEmail"
          element="input"
          label="User Email"
          placeHolder="Please enter your email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        ></Input>
        <Input
          id="userPassword"
          element="input"
          type="password"
          label="User Password"
          placeHolder="Please enter your password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password (min 6 characters)"
          onInput={inputHandler}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {" "}
        SWITCH TO {!isLoginMode ? "LOGIN" : "SIGNUP"}
      </Button>
    </Card>
  );
};

export default Authenticate;
