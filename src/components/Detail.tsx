import "./styles/Detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAction } from "../redux/actions/actions";
import { RootState } from "../redux/store";

interface DetailProps {
  colors: { [key: string]: any };
  firstLetterUpperCase: (word: string) => string;
}

export const Detail: React.FC<DetailProps> = ({
  colors,
  firstLetterUpperCase,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const { detail } = useSelector((state: RootState) => state);

  // sprites generation
  const SpritesGen: React.FC<{ data: any }> = ({ data }) => {
    let generations = Object.keys(data);
    let generationsKeys = generations.map((g) => Object.keys(data[g]));
    return (
      <div className="generations-pokemon">
        <h5>Generations</h5>
        {generations.map((gen, ind) => (
          <div key={ind} className="generation-container">
            <p className="generation-title">{gen}</p>
            <div>
              {generationsKeys[ind].map((k, i) => (
                <Sprites key={i} src={data[gen][k]} theme={k} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // sprites others
  const SpritesOthers: React.FC<{ data: any }> = ({ data }) => {
    let keys = Object.keys(data);
    return (
      <div className="others-container">
        <h5>Others</h5>
        {keys.map((k, i) => (
          <Sprites key={i} src={data[k]} theme={k} />
        ))}
      </div>
    );
  };

  // sprites component
  const Sprites: React.FC<{
    src: { front_default: string };
    theme: string;
  }> = ({ src, theme }) => {
    return (
      <div className="sprites-container">
        <img src={src.front_default} alt="pokemon-sprite" />
        <small className="caption">{theme}</small>
      </div>
    );
  };

  // moves component
  const Moves: React.FC<{ data: any }> = ({ data }) => {
    let currentMoves = data.slice(0, 5);
    return (
      <div>
        <h3>Moves</h3>
        {currentMoves.map((m: any, i: number) => (
          <div key={i}>
            <div>
              <p>Move</p>
              <p>{m.move.name}</p>
            </div>
            <div>
              {m.version_group_details.slice(0, 5).map((l: any, i: number) => (
                <div key={i}>
                  <p>{l.level_learned_at}</p>
                  <p>{l.move_learn_method.name}</p>
                  <p>{l.version_group.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
      <div className="text-container">
        <h3>{title}</h3>
        {text.map((t, i) => (
          <p key={i}>
            {firstLetterUpperCase(t)}
            {small && <small key={i}>{small[i] ? small[i] : "None"}</small>}
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
            <h1 className="pokemon-name">{detail.name.toLocaleUpperCase()}</h1>
            <div className="image-container">
              <img
                src={
                  detail.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={detail.name}
              />
            </div>
          </div>
          <div className="about-container elem">
            <Info
              title="About"
              text={["Weight", "Height", "Base Experience", "Species", "Order"]}
              small={[
                Math.round(detail.weight / 2.2046) + "kg",
                Math.round(detail.height / 3.2808) + "m",
                detail.base_experience,
                detail.species.name,
                detail.order,
              ]}
            />
            <Info
              title="Abilities"
              text={detail.abilities.map((a) => a.ability.name)}
              small={detail.abilities.map((a) => a.slot)}
            />
            <Info
              title="Types"
              text={detail.types.map((t) => t.type.name)}
              small={detail.types.map((t) => t.slot)}
            />
            <Info
              title="Items"
              text={
                detail.held_items.length > 1
                  ? detail.held_items.map((i) => i.item.name)
                  : ["None"]
              }
              small={null}
            />
          </div>
          <div className="stats-container elem">
            <h3>Stats</h3>
            <div>
              {detail.stats.map((e, i) => (
                <p key={i}>
                  {e.stat.name}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={e.base_stat}
                  />
                  <small>{e.base_stat}</small>
                </p>
              ))}
            </div>
          </div>
          <div className="moves-container elem">
            <Moves data={detail.moves} />
          </div>
          <div className="sprites-container elem">
            <h3>Sprites</h3>
            <div>
              <SpritesOthers data={detail.sprites.other} />
              <SpritesGen data={detail.sprites.versions} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
