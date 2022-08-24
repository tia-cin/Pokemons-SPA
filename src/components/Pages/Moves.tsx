import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoves } from "../../redux/actions/getInfo";
import { RootState } from "../../redux/store";

export const Moves: React.FC = () => {
  const dispatch = useDispatch();
  const { moves } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getMoves());
  }, [dispatch]);

  console.log(moves);
  return <div>moves</div>;
};
