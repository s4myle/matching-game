import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(cardAmount) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(cardAmount);

    return /*html*/`
    <section class="board-game">
        ${$htmlContent}
    </section>`; 
}

export default BoardGame;   