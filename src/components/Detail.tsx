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

  // sprites generation
  const SpritesGen: React.FC<{ generation: string; data: any }> = ({
    generation,
    data,
  }) => {
    let keys = Object.keys(data);
    return (
      <div>
        <h5>{generation}</h5>
        {Array.isArray(keys) ? (
          keys.map((e, i) => <Sprites key={i} src={data[e]} theme={e} />)
        ) : (
          <Sprites src={data[keys]} theme={keys} />
        )}
      </div>
    );
  };

  // sprites component
  const Sprites: React.FC<{
    src: { front_default: string };
    theme: string;
  }> = ({ src, theme }) => {
    return (
      <div>
        <img src={src.front_default} alt="pokemon-sprite" />
        <small>{theme}</small>
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
        <div className="pokemon-container">
          <div className="titles-container elem">
            <div className="image-container">
              <img
                src={
                  detail.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={`${detail.name}-image`}
              />
            </div>
            <h1 className="pokemon-name">{detail.name.toLocaleUpperCase()}</h1>
          </div>
          <div className="about-container elem">
            <h3>About</h3>
            <p>Weight</p>
            <small>{detail.weight}</small>
            <p>Height</p>
            <small>{detail.height}</small>
            <p>Base Experience</p>
            <small>{detail.base_experience}</small>
            <p>Species</p>
            <small>{detail.species.name}</small>
            <p>Order</p>
            <small>{detail.order}</small>
          </div>
          <div className="abilities-container elem">
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
          <div className="types-container elem">
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
          <div className="stats-container elem">
            <h3>Stats</h3>
            <div>
              {detail.stats.map((e, i) => (
                <p key={i}>
                  {e.stat.name}
                  <input type="range" min="0" max="100" value={e.base_stat} />
                </p>
              ))}
            </div>
          </div>
          <div className="items-container elem">
            <h3>Items</h3>
            <div>
              {detail.held_items.map((e, i) => (
                <p key={i}>{e.item.name}</p>
              ))}
            </div>
          </div>
          <div className="sprites-container elem">
            <h3>Sprites</h3>
            <div>
              <SpritesGen
                generation="Generation I"
                data={detail.sprites.versions["generation-i"]}
              />
              <SpritesGen
                generation="Generation II"
                data={detail.sprites.versions["generation-ii"]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
