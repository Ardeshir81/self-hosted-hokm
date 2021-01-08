import { useContext } from "react";
import { GameStateContext } from "./GameStateContext";
//@ts-ignore
import cardBackAsPng from "./card-back.png";

export default function OtherPlayerCards() {
  const gameState = useContext(GameStateContext);

  return (
    <>
      {Array(gameState.otherPlayer.cardsLength)
        .fill(1)
        .map(() => (
          <div style={{ display: "inline-block", width: 40 }}>
            <div
              style={{
                width: 152,
                height: 229,
                backgroundImage: `url(${cardBackAsPng})`,
              }}
            />
          </div>
        ))}
    </>
  );
}