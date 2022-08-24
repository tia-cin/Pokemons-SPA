import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions/getInfo";
import { RootState } from "../../redux/store";

export const Types: React.FC = () => {
  const dispatch = useDispatch();

  const { types } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getTypes());
  }, [dispatch]);

  console.log(types);

  return <div>types</div>;
};
