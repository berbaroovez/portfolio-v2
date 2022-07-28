import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import CurlyElements from "curly-html-elements";
const gameState = {
  roomId: "party",
  status: "started",
  players: [
    {
      name: "berbaroovez",
      cards: [
        {
          NumericalValue: 8,
          Suit: "Spades",
          Value: "8",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 4,
          Suit: "Spades",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 10,
          Suit: "Spades",
          Value: "10",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 2,
          Suit: "Clubs",
          Value: "2",
          Flipped: false,
          Correct: false,
        },
      ],
      yourTurn: true,
      clientId: "-0QTDd9Pai7p5RAkAAAJ",
      host: true,
    },
    {
      name: "footykid4",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4K-91Q7AAAL",
      host: false,
    },
    {
      name: "carter",
      cards: [
        {
          NumericalValue: 8,
          Suit: "Spades",
          Value: "8",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 4,
          Suit: "Spades",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 10,
          Suit: "Spades",
          Value: "10",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 2,
          Suit: "Clubs",
          Value: "2",
          Flipped: false,
          Correct: false,
        },
      ],
      yourTurn: true,
      clientId: "-0QTDd9Pai7p5RAkAAAJ",
      host: true,
    },
    {
      name: "brad",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4K-91Q7AAALs",
      host: false,
    },
    {
      name: "forest",
      cards: [
        {
          NumericalValue: 8,
          Suit: "Spades",
          Value: "8",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 4,
          Suit: "Spades",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 10,
          Suit: "Spades",
          Value: "10",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 2,
          Suit: "Clubs",
          Value: "2",
          Flipped: false,
          Correct: false,
        },
      ],
      yourTurn: true,
      clientId: "-0QTDd9Pai7p5RddAkAAAJ",
      host: true,
    },
    {
      name: "dame",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4Kda-91Q7AAAL",
      host: false,
    },
    {
      name: "woooooo",
      cards: [
        {
          NumericalValue: 8,
          Suit: "Spades",
          Value: "8",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 4,
          Suit: "Spades",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 10,
          Suit: "Spades",
          Value: "10",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 2,
          Suit: "Clubs",
          Value: "2",
          Flipped: false,
          Correct: false,
        },
      ],
      yourTurn: true,
      clientId: "-0QTDd9Pai7pwww5RAkAAAJ",
      host: true,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
    {
      name: "dad?",
      yourTurn: false,
      cards: [
        {
          NumericalValue: 4,
          Suit: "Clubs",
          Value: "4",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 12,
          Suit: "Diamonds",
          Value: "Queen",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 13,
          Suit: "Clubs",
          Value: "King",
          Flipped: false,
          Correct: false,
        },
        {
          NumericalValue: 9,
          Suit: "Spades",
          Value: "9",
          Flipped: false,
          Correct: false,
        },
      ],
      clientId: "v8ufxmutW4dadwK-91Q7AAAL",
      host: false,
    },
  ],
};
// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };
const Test = () => {
  const [game, setGame] = useState(gameState);
  const [playerIndex, setPlayerIndex] = useState(0);
  const getAllPlayers = () => {
    var playerDivs = document.getElementsByClassName("players");
    console.log(playerDivs);
    var radius = 400;
    var container = document.getElementById("container");
    const options = {
      type: "equal",
      size: 1,
      reflection: 1,
      rotateY: 15,
      reverse: false,
      shiftY: -50,
      shiftX: 0,
    };
    new CurlyElements(container, options);
    // var width = container?.offsetWidth;
    // var height = container?.offsetHeight;
    // var angle = 0;
    // var step = (2 * Math.PI) / playerDivs.length;

    // for (let i = 0; i < playerDivs.length; i++) {
    //   var testDiv = playerDivs[i];
    //   if (testDiv !== null && width !== undefined && height !== undefined) {
    //     console.log(testDiv.offsetWidth);
    //     var x = Math.round(
    //       width / 2 + radius * Math.cos(angle) - testDiv.offsetWidth / 2
    //     );
    //     var y = Math.round(
    //       height / 2 + radius * Math.sin(angle) - testDiv.offsetWidth / 2
    //     );
    //     console.log(x, y);

    //     testDiv.style.left = x + "px";
    //     testDiv.style.top = y + 100 + "px";
    //     angle += step;
    //   }
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <PlayerInfo
          className="players"
          key={gameState.players[playerIndex].clientId}
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
        >
          <h4>{gameState.players[playerIndex].name}</h4>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {gameState.players[playerIndex].cards.map((card) => {
              return (
                <AnimatePresence exitBeforeEnter>
                  {card.Flipped ? (
                    <Card
                      key={"test3"}
                      initial={{
                        rotateY: 90,
                        opacity: 0,

                        // transition: { ease: "easeIn", duration: 0.7 },
                      }}
                      animate={{
                        rotateY: 0,
                        opacity: 1,
                        transition: { ease: "easeIn", duration: 0.7 },
                        // transition: { ease: "easeIn", duration: 0.7 },
                      }}
                    >
                      {card.Value}
                    </Card>
                  ) : (
                    <motion.img
                      exit={{
                        rotateY: 90,
                        opacity: 0,
                        transition: { ease: "easeIn", duration: 0.7 },
                      }}
                      initial={false}
                      key={card.Value + card.Suit}
                      src="/cards/ClubsKing.svg"
                      alt="card"
                      width={120}
                      height={150}
                    />
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        </PlayerInfo>
      </AnimatePresence>
      {/* </AnimatePresence> */}
      <button
        onClick={() => {
          const tempGameState = { ...gameState };
          tempGameState.players[0].cards[0].Flipped =
            !tempGameState.players[0].cards[0].Flipped;
          setGame(tempGameState);
        }}
      >
        Flip Card 1
      </button>
      <button
        onClick={() => {
          const tempGameState = { ...gameState };
          tempGameState.players[0].cards[1].Flipped =
            !tempGameState.players[0].cards[1].Flipped;
          setGame(tempGameState);
        }}
      >
        Flip Card 2
      </button>
      //buttons to increase and decrease playerIndex
      <button
        onClick={() => {
          setPlayerIndex(playerIndex + 1);
        }}
      >
        Next Player
      </button>
      <button
        onClick={() => {
          setPlayerIndex(playerIndex - 1);
        }}
      >
        Previous Player
      </button>
      <button onClick={() => setGame(gameState)}>Reset</button>
    </div>
  );
};

const PlayerContainer = styled(motion.div)`
  width: 75%;
  height: 300px;
  /* background-color: #73792b; */
  position: relative;
  .players {
    width: 270px;
    /* background: yellow; */
    /* border: 1px solid black; */
    /* position: absolute; */
  }
`;
const PlayerInfo = styled(motion.div)``;
const Card = styled(motion.div)`
  background: green;
  width: 120px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
`;

export default Test;

// <div>
//   <AnimatePresence exitBeforeEnter>
//     {cards.flipped ? (
//       <motion.div key="test">
//         {cards.suit}+{cards.card}
//       </motion.div>
//     ) : (
//       <Card
//         key="test1"
//         // initial={{ opacity: 0 }}
//         // animate={{ opacity: 1, transition: { duration: 1.5 } }}
//         // initial={{ rotateY: 180 }}
//         // animate={{ rotateY: 170, transition: { duration: 3 } }}
//         // exit={{ rotateY: 170, transition: { duration: 3 } }}
//         exit={{ rotateY: 90, transition: { duration: 0.5 } }}
//       />
//     )}
//   </AnimatePresence>

//   <button onClick={() => setCards({ ...cards, flipped: !cards.flipped })}>
//     Floppy
//   </button>
// </div>
