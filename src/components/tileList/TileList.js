import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arrOfObj }) => {


  return (
    <div>
      {arrOfObj.map(({ name, ...rest }) => <Tile name={name} description={rest} />)}
    </div>
  );
};
