import CardGame from "../../components/CardGame";

function BoardGame(cardAmount) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(cardAmount);

    console.log($htmlBoardGame);

    return $htmlBoardGame;
}

export default BoardGame;   