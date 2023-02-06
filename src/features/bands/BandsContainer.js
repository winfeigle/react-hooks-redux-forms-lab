import React from "react";
import BandInput from "./BandInput";
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
    const dispatch = useDispatch();
    const bands = useSelector((state) => state.bands.entities)

    const onBandSubmit = (formData) => {
      dispatch(bandAdded(formData))
    }


  return(
    <div>
      <BandInput 
        onBandSubmit={onBandSubmit}
        />
      <ul>
        {
          bands.map((band) => <li key={band}>{band}</li>)
        }
      </ul>
    </div>
  );
}

export default BandsContainer;
