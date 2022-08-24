import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailAction } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";

export const Detail: React.FC = () => {
  const dispatch = useDispatch();

  const { detail } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getDetailAction(3));
  }, [dispatch]);

  console.log(detail);

  return <div>detail</div>;
};
