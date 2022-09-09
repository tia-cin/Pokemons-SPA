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
        <h5>GENERATIONS</h5>
        <div className="generations-column">
          {generations.map((gen, ind) => (
            <div key={ind} className="generation-container">
              <p className="generation-title">{gen.toLocaleUpperCase()}</p>
              <div>
                {generationsKeys[ind].map((k, i) => (
                  <Sprites key={i} src={data[gen][k]} theme={k} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // sprites others
  const SpritesOthers: React.FC<{ data: any }> = ({ data }) => {
    let keys = Object.keys(data);
    return (
      <div className="others-container">
        <h5>OTHERS</h5>
        <div>
          {keys.map((k, i) => (
            <Sprites key={i} src={data[k]} theme={k} />
          ))}
        </div>
      </div>
    );
  };

  // sprites component
  const Sprites: React.FC<{
    src: { front_default: string };
    theme: string;
  }> = ({ src, theme }) => {
    return (
      <div className="sprite-container">
        <img src={src.front_default} alt="pokemon-sprite" />
        <small className="caption">{theme.toLocaleUpperCase()}</small>
      </div>
    );
  };

  // moves component
  const Moves: React.FC<{ data: any }> = ({ data }) => {
    let currentMoves = data.slice(0, 5);
    return (
      <div>
        {currentMoves.map((m: any, i: number) => (
          <div key={i} className="move-container">
            <div>
              <p>{firstLetterUpperCase(m.move.name)}</p>
            </div>
            <div>
              <div className="move-details">
                <p>Level</p>
                <p>Move</p>
                <p>Version</p>
              </div>
              {m.version_group_details.slice(0, 5).map((l: any, i: number) => (
                <div key={i} className="move-details">
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
    text: Array<string>;
    small: Array<string | number> | null;
  }> = ({ text, small }) => {
    return (
      <div>
        {text.map((t, i) => (
          <div className="text-container">
            <p key={i}>{firstLetterUpperCase(t)}</p>
            {small && <small key={i}>{small[i] ? small[i] : "None"}</small>}
          </div>
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
          <div className="about-container elem">
            <div className="titles-container">
              <div>
                <h1 className="pokemon-name">
                  {detail.name.toLocaleUpperCase()}
                </h1>
              </div>
              <div className="pokemon-image">
                <img
                  src={
                    detail.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default
                  }
                  alt={detail.name}
                />
              </div>
            </div>
            <div className="characteristics-container">
              <div>
                <h3>ABOUT</h3>
              </div>
              <div>
                <Info
                  text={[
                    "Weight",
                    "Height",
                    "Base Experience",
                    "Species",
                    "Order",
                  ]}
                  small={[
                    Math.round(detail.weight / 2.2046) + "kg",
                    Math.round(detail.height / 3.2808) + "m",
                    detail.base_experience,
                    detail.species.name,
                    detail.order,
                  ]}
                />
                <Info
                  text={detail.abilities.map((a) => a.ability.name)}
                  small={detail.abilities.map((a) => a.slot)}
                />
                <Info
                  text={detail.types.map((t) => t.type.name)}
                  small={detail.types.map((t) => t.slot)}
                />
                <Info
                  text={["Items"]}
                  small={
                    detail.held_items.length > 1
                      ? detail.held_items.map((i) => i.item.name)
                      : ["None"]
                  }
                />
              </div>
            </div>
          </div>
          <div className="stats-container elem">
            <div>
              <h3>STATS</h3>
            </div>
            <div>
              {detail.stats.map((e, i) => (
                <div className="stat-detail">
                  <p key={i}>{e.stat.name}</p>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={e.base_stat}
                  />
                  <small>{e.base_stat}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="moves-container elem">
            <div>
              <h3>MOVES</h3>
            </div>
            <Moves data={detail.moves} />
          </div>
          <div className="sprites-container elem">
            <div>
              <h3>SPRITES</h3>
            </div>
            <SpritesOthers data={detail.sprites.other} />
            <SpritesGen data={detail.sprites.versions} />
          </div>
        </div>
      )}
    </div>
  );
};
