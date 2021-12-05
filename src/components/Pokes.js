import React from "react";
import uniqueId from "uniqueid";

const Pokes = (props) => {
  const {list} = props;

  return (
    <div className="poke-container">
      {list.map(el => {
        return (
          <div className="card" key={uniqueId()}>
            <img src={el.image} alt="avatar" />
            <p className="name">{el.name}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Pokes;