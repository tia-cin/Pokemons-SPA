import "./styles/Detail.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAction } from "../redux/actions/actions";
import { RootState } from "../redux/store";

interface DetailProps {
  firstLetterUpperCase: (word: string) => string;
}

export const Detail: React.FC<DetailProps> = ({ firstLetterUpperCase }) => {
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const { detail } = useSelector((state: RootState) => state);

  // rotate pokemon
  const [turn, setTurn] = useState(true);
  const handleTurn = (e: any): void => {
    setTurn(!turn);
  };

  // extra component
  const ExtraComponent: React.FC<{
    title: string;
    value: Array<string> | string | number;
  }> = ({ title }, { value }) => {
    return (
      <div>
        <h3>{title}</h3>
        <div>
          {Array.isArray(value) ? (
            value.map((v, i) => <p key={i}>{v}</p>)
          ) : (
            <p>{value}</p>
          )}
        </div>
      </div>
    );
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
              <h1>{detail.name.toLocaleUpperCase()}</h1>
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
          <section>
            <ExtraComponent
              title="Base Experience"
              value={detail.base_experience}
            />
          </section>
        </div>
      )}
    </div>
  );
};
