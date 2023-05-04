import React from "react";

export default function Title(props) {
  return (
    <h3 className="text-mainColor text-4xl font-poppinsSemiBold text-center">
      {props.value}
    </h3>
  );
}
