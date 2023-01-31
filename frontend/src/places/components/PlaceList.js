import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
const PlaceList = (props) => {
  {
    if (props.items.length === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2>No Places Found.</h2>
            <button>Share Places</button>
          </Card>
        </div>
      );
    }
  }
  return (
    <ul className="place-list">
      {props.items.map((item) => (
        <PlaceItem
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          title={item.title}
          description={item.description}
          address={item.address}
          creatorId={item.creator}
          coordinates={item.location}
        >
          {" "}
        </PlaceItem>
      ))}
    </ul>
  );
};

export default PlaceList;
