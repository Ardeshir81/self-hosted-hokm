import { useContext } from "react";
import { GameStateContext } from "./GameStateContext";
import LiveIndicator from "./LiveIndicator";

export default function PlayerInfo() {
  const gameState = useContext(GameStateContext);

  return (
    <div className="player-info">
      <LiveIndicator />
      {gameState.player.isHaakem ? <h1 className="crown-mark">♔</h1> : <></>}
      {gameState.player.name}: {gameState.player.wins}
    </div>
  );
}
