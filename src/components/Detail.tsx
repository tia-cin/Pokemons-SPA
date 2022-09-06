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
  const SpritesOthers: React.FC<{ data: any }> = ({ data }) => {
    let keys = Object.keys(data);
    console.log("--------------------------");
    console.log(data);
    console.log("--------------------------");
    return (
      <div>
        <h5>Versions</h5>
        {/* {others.map((o, i) => (
      <Sprites key={i} src={o} theme={o} />
    ))} */}
      </div>
    );
  };

  // sprites generation
  const SpritesGen: React.FC<{
    data: any;
  }> = ({ data }) => {
    let base = Object.keys(data).filter(
      (k) => data[k] !== null && typeof data[k] !== "string"
    );
    let keys = base.map((b) => Object.keys(data[b]));
    let others = keys[0]
      .map((k) => data[base[0]][k])
      .map((o) => o.front_default);

    let versions = keys[1].map((k) =>
      Object.keys(data[base[1]][k]).map((v) => data[base[1]][k][v])
    );
    let generations = versions.map((v) => v.map((val) => val.front_default));
    // console.log("====================================");
    // console.log(keys);
    // console.log("====================================");
    return (
      <div>
        {/* <div>
          <h5>Versions</h5>
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
    src: string;
    theme: string;
  }> = ({ src, theme }) => {
    return (
      <div>
        <img src={src} alt="pokemon-sprite" />
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
              <SpritesGen data={detail.sprites.versions} />
              <SpritesOthers data={detail.sprites.others} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
