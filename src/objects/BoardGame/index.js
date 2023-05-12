import "./style.css";
import CardGame from "../../components/CardGame";

function BoardGame(cardAmount) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(cardAmount);

    return /*html*/`
    <section class="board-game">
        ${$htmlContent}
    </section>`; 
}

export default BoardGame;   