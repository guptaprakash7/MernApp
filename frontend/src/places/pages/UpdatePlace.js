import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from "../../shared/Util/Validator";

import "./PlaceForm.css";
const UpdatePlace = (props) => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "one of the most famous sky scrappers in the world",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__480.jpg",
      address: "empire state building",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "one of the most famous sky scrappers in the world",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__480.jpg",
      address: "empire state building",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u2",
    },
  ];

  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlaces = DUMMY_PLACES.find((p) => p.id === placeId);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlaces.title,
          isValid: true,
        },
        description: {
          value: identifiedPlaces.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  if (!identifiedPlaces) {
    return (
      <div className="center">
        {" "}
        <h2>No Places found!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        {" "}
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MIN(5)]}
        errorText="Please enter a valid description(min 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        Update place
      </Button>
    </form>
  );
};

export default UpdatePlace;
