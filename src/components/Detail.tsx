import "./styles/Detail.css";
import React, { useEffect } from "react";
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

  // sprites others

  // sprites generation
  const SpritesGen: React.FC<{
    data: any;
  }> = ({ data }) => {
    // let base = Object.keys(data).filter(
    //   (k) => data[k] !== null && typeof data[k] !== "string"
    // );
    // let keys = base.map((b) => Object.keys(data[b]));
    // let others = keys[0]
    //   .map((k) => data[base[0]][k])
    //   .map((o) => o.front_default);
    let generations = Object.keys(data);
    let generationsKeys = generations.map((g) => Object.keys(data[g]));

    return (
      <div>
        <h5>Generations</h5>
        {generations.map((gen, ind) => (
          <div key={ind}>
            <p>{gen}</p>
            <div>
              {generationsKeys[ind].map((k, i) => (
                <Sprites key={i} src={data[gen][k]} theme={k} />
              ))}
            </div>
          </div>
        ))}
        {/* <div>
          {others.map((o, i) => (
            <Sprites key={i} src={o} theme={o} />
          ))}
        </div>
        <div>
          <h5>Others</h5>
          {generations.map((g, index) =>
            g.map((e, i) => <Sprites key={i} src={e} theme={keys[1][index]} />)
          )}
        </div> */}
        {/* <h5>{generation}</h5>
        {Array.isArray(keys) ? (
          keys.map((e, i) => <Sprites key={i} src={data[e]} theme={e} />)
        ) : (
          <Sprites src={data[keys]} theme={keys} />
        )} */}
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
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={e.base_stat}
                  />
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
              {/* <SpritesOthers data={detail.sprites.others} /> */}
              <SpritesGen data={detail.sprites.versions} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
