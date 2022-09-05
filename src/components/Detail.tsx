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
  const SpritesGen: React.FC<{
    generation: string;
    data: { [key: string]: any };
  }> = ({ generation, data }) => {
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

  // info component
  const Info: React.FC<{
    title: string;
    text: Array<string>;
    small: Array<string | number> | null;
  }> = ({ title, text, small }) => {
    return (
      <div>
        <h3>{title}</h3>
        {text.map((t, i) => (
          <p key={i}>
            {t}
            {small && <small key={i}>{small[i]}</small>}
          </p>
        ))}
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
            <Info
              title="About"
              text={["Weight", "Height", "Base Experience", "Species", "Order"]}
              small={[
                detail.weight,
                detail.height,
                detail.base_experience,
                detail.species.name,
                detail.order,
              ]}
            />
          </div>
          <div className="abilities-container elem">
            <Info
              title="Abilities"
              text={detail.abilities.map((a) => a.ability.name)}
              small={detail.abilities.map((a) => a.slot)}
            />
          </div>
          <div className="types-container elem">
            <Info
              title="Types"
              text={detail.types.map((t) => t.type.name)}
              small={detail.types.map((t) => t.slot)}
            />
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
            <Info
              title="Items"
              text={detail.held_items.map((i) => i.item.name)}
              small={null}
            />
          </div>
          <div className="sprites-container elem">
            <h3>Sprites</h3>
            <div>
              {/* {[
                "generation-i",
                "generation-ii",
                "generation-iii",
                "generation-iv",
                "generation-v",
                "generation-vi",
                "generation-vii",
                "generation-viii",
              ].map((e, i) => (
                <SpritesGen
                  key={i}
                  generation={e}
                  data={detail.sprites.versions[e]}
                />
              ))} */}
              <SpritesGen
                generation="Generation I"
                data={detail.sprites.versions["generation-i"]}
              />
              <SpritesGen
                generation="Generation II"
                data={detail.sprites.versions["generation-ii"]}
              />
              <SpritesGen
                generation="Generation III"
                data={detail.sprites.versions["generation-iii"]}
              />
              <SpritesGen
                generation="Generation IV"
                data={detail.sprites.versions["generation-iv"]}
              />
              <SpritesGen
                generation="Generation V"
                data={detail.sprites.versions["generation-v"]}
              />
              <SpritesGen
                generation="Generation VI"
                data={detail.sprites.versions["generation-vi"]}
              />
              <SpritesGen
                generation="Generation VII"
                data={detail.sprites.versions["generation-vii"]}
              />
              <SpritesGen
                generation="Generation VIII"
                data={detail.sprites.versions["generation-viii"]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
