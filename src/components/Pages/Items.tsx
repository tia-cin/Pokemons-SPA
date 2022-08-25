import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/actions/getInfo";
import { RootState } from "../../redux/store";
import { Pagination } from "../Pagination";

export const Items: React.FC = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getItems());
  }, [dispatch]);

  console.log(items);

  return (
    <div>
      <Pagination array={items} />
    </div>
  );
};
