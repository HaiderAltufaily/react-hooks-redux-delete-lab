import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

function Band({ band }) {
  const dispatch = useDispatch();
  function handleDeleteBand() {
    dispatch(bandRemoved(band.id));
  }
  return (
    <li>
      <h3>{band.name}</h3>
      <button onClick={handleDeleteBand}>Delete Band</button>
    </li>
  );
}

export default Band;
