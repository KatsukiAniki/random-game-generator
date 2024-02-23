import Image from "next/image";
import MotionPage from "./lib/motion";
import Card from "./lib/card";
import { GameData } from "./data/games";
import ApiService, { getGamesData } from "./service/api-service";

export default function Home() {

  const games: GameData[] = getGamesData();

  return (
    <MotionPage>
    <main className="h-[calc(100vh-64px)] w-full">
      <div className="flex border border-blue-700 h-full justify-center items-center">
        {games.map((game) => 
                <Card title={game.name} price={game.price_overview.final_formatted} genre={""} score={""} link={""} description={""}></Card>
        )}
      </div>
    </main>
    </MotionPage>
  );
}
