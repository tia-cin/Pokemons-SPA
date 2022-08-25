import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecies } from "../../redux/actions/getInfo";
import { RootState } from "../../redux/store";
import { Pagination } from "../Pagination";

export const Species: React.FC = () => {
  const dispatch = useDispatch();

  const { species } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getSpecies());
  }, [dispatch]);

  console.log(species);

  return (
    <div>
      <Pagination array={species} />
    </div>
  );
};
