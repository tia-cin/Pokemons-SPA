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

  // simple extra component
  const SimpleComponent: React.FC<{
    title: string;
    value: string | number;
  }> = ({ title, value }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
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
                alt={`${detail.name}-image`}
              />
            </div>
          </header>
          <section>
            <SimpleComponent title="Height" value={detail.height} />
            <SimpleComponent title="Weight" value={detail.weight} />
            <SimpleComponent
              title="Base Experience"
              value={detail.base_experience}
            />
            <SimpleComponent title="Species" value={detail.species.name} />
            <div>
              <h3>Abilities</h3>
              {detail.abilities.map((e, i) => (
                <div key={i}>
                  <p>{firstLetterUpperCase(e.ability.name)}</p>
                  <p>{e.slot}</p>
                  <small>{e.is_hidden}</small>
                </div>
              ))}
            </div>
            <div>
              <h3>Items</h3>
              {detail.held_items.map((e, i) => (
                <div key={i}>
                  <p>{e.item.name}</p>
                  <div>
                    {e.version_details.map((e, i) => (
                      <p key={i}>{e.rarity}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
