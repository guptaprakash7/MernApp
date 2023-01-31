import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
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

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
