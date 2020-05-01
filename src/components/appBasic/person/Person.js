import React from "react";

export const Person = (props) => {
  return (
    <div>
      <span>Name: {props.name}, </span>
      <span>Apellido: {props.surname}, </span>
      <span>Age: {props.age}</span>
    </div>
  );
};
