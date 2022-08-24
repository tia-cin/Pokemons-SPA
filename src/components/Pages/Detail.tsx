import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAction } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";

export const Detail: React.FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<any>();

  const { detail } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch<any>(getDetailAction(id));
  }, [dispatch]);

  console.log(detail);

  return <div>detail</div>;
};
