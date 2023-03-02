import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props: any) {
  const [playerId] = useState(props.playerId);

  return (
    <>
      <article id={props.id}>
        <header className="major">
          <h3 className="season">SEASON 2022</h3>
          <p id={props.nameid}>{props.name}</p>
        </header>
        <Link to={props.path} className="wrapper-link">
          {" "}
        </Link>
        <footer id={props.footerid} className="card-foot">
          <div className="player-info">
            <div className="basic-info">
              <div className="position">
                <h2>POSITION</h2>
                <h3>FORWARD</h3>
              </div>
              <div className="club" id={props.clubid}>
                <h2>CLUB</h2>
                <h3>{props.club}</h3>
              </div>
              <div className="country">
                <h2>COUNTRY</h2>
                <h3>{props.country}</h3>
              </div>
            </div>
            <div className="stats">
              <div className="games">
                <h2>GAMES</h2>
                <h3 key={playerId}>
                  {props.data.response[0].statistics[0].games.appearences}
                </h3>
              </div>
              <div className="ga">
                <h2>G/A</h2>
                <h3 id="goals" key={playerId}>
                  {props.data.response[0].statistics[0].goals.total}
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
export async function getStaticProps() {
  const url = `https://player-stats-6gszj93q0-sethyshola20.vercel.app/api/players/${playerId}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
