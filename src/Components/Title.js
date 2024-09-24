import React from "react";
import BoxComponent from "./Box";
import { useNavigate } from "react-router-dom";
import TypographyComponent from "./Typography";
export default function Title(props) {
  const navigate = useNavigate();
  return (
    <BoxComponent
      onClick={() => {
        navigate("/");
      }}
      sx={{ cursor: "pointer" }}
    >
      <TypographyComponent {...props}>نئی نیوز</TypographyComponent>
    </BoxComponent>
  );
}
