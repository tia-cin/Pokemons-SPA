import "./styles/Detail.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAction } from "../redux/actions/actions";
import { RootState } from "../redux/store";

interface DetailProps {
  firstLetterUpperCase: (word: string) => string;
  colors: { [key: string]: any };
}

export const Detail: React.FC<DetailProps> = ({
  firstLetterUpperCase,
  colors,
}) => {
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
                alt={`${detail.name}-image`}
              />
            </div>
          </header>
          <section>
            <div>
              <h3>About</h3>
              <p>Weight</p>
              <small>{detail.weight}</small>
              <p>Height</p>
              <small>{detail.height}</small>
              <p>Base Experience</p>
              <small>{detail.base_experience}</small>
              <p>Species</p>
              <small>{detail.species.name}</small>
            </div>
            <div>
              <h3>Abilities</h3>
              <div>
                {detail.abilities.map((e, i) => (
                  <p key={i}>
                    {e.ability.name}
                    <small key={i}>{e.slot}</small>
                  </p>
                ))}
                {/*add bolean*/}
              </div>
            </div>
            <div>
              <h3>Types</h3>
              <div>
                {detail.types.map((e, i) => (
                  <p key={i}>
                    {e.type.name}
                    <small>{e.slot}</small>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3>Stats</h3>
              <div>
                {detail.stats.map((e, i) => (
                  <p key={i}>
                    {e.stat.name}
                    <small>{e.base_stat}</small>
                    <small>{e.effort}</small>
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
