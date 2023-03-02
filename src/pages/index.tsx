import { NextPage } from "next";
import { api } from "../utils/api";
import Card from "./components/card";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <main className="main">
      <section className="players-grid">
        <Card
          name={"Lewandowski"}
          id="lewy"
          footerid={"bayern"}
          nameid={"lewa"}
          club={"BAYERN MUNCHEN"}
          clubid={"FCB"}
          games={"34"}
          goals={"38"}
          path={"lewandowski"}
          country={"POLAND"}
          link={"https://www.youtube.com/watch?v=WrFt76L35C0"}
          playerId={521}
        />

        <Card
          name={"Benzema"}
          id="benzema"
          footerid={"real"}
          nameid={"benze"}
          club={"REAL MADRID"}
          clubid={"RM"}
          selectedValue={"2021"}
          games={"32"}
          goals={"39"}
          path={"benzema"}
          country={"FRANCE"}
          playerId={759}
        />

        <Card
          name={"Salah"}
          id="salah"
          footerid={"pool"}
          nameid={"sal"}
          club={"LIVERPOOL"}
          clubid={"LFC"}
          games={"35"}
          goals={"36"}
          path={"salah"}
          country={"EGYPT"}
          playerId={306}
        />

        <Card
          name={"Mbappe"}
          id="mbappe"
          footerid={"psg"}
          nameid={"mbap"}
          club={"PARIS SAINT GERMAIN"}
          clubid={"PSG"}
          games={"35"}
          goals={"45"}
          path={"mbappe"}
          country={"FRANCE"}
          playerId={278}
        />

        <Card
          name={"Vlahovic"}
          id="vlahovic"
          footerid={"juve"}
          nameid={"vla"}
          club={"JUVENTUS"}
          clubid={"JT"}
          games={"36"}
          goals={"27"}
          path={"vlahovic"}
          country={"SERBIA"}
          playerId={30415}
        />
      </section>
    </main>
  );
};
export default Home;
