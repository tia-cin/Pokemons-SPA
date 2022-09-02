import "./styles/Detail.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAction } from "../redux/actions/actions";
import { RootState } from "../redux/store";

export const Detail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const { detail } = useSelector((state: RootState) => state);

  // rotate pokemon
  const [turn, setTurn] = useState(true);
  const handleTurn = (e: any): void => {
    setTurn(!turn);
  };

  useEffect(() => {
    dispatch<any>(getDetailAction(id));
  }, [dispatch, id]);

  console.log(detail);

  return (
    <div className="page-container" id="detail">
      {detail && (
        <div>
          <header>
            <div>
              <img
                src={
                  turn
                    ? detail.sprites.front_default
                    : detail.sprites.back_default
                }
                alt=""
              />
            </div>
            <div>
              <h1>{detail.name}</h1>
              <p>Experience: {detail.base_experience}</p>
              <p>Height: {detail.height}</p>
              <p>Weight: {detail.weight}</p>
              <p>Order: {detail.order}</p>
              <button onClick={handleTurn}>Turn</button>
            </div>
            <div>
              <img
                src={
                  turn
                    ? detail.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    : detail.sprites.versions["generation-v"]["black-white"]
                        .animated.back_default
                }
                alt=""
              />
            </div>
          </header>
        </div>
      )}
    </div>
  );
};
