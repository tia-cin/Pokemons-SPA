import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoves } from "../../redux/actions/getInfo";
import { RootState } from "../../redux/store";
import { Pagination } from "../Pagination";

export const Moves: React.FC = () => {
  const dispatch = useDispatch();
  const { moves } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getMoves());
  }, [dispatch]);

  console.log(moves);
  return (
    <div>
      <Pagination array={moves} />
    </div>
  );
};
