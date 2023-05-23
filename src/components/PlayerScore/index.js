import "./style.css";

function PlayerScore(points = 0) {
    return /*html*/ `
        <ol class="player-score" data-points="${points}"> 
            <li class="pointer">One</li>
            <li class="pointer">Two</li>
            <li class="pointer">Three</li>
        </ol>
        `;
}

export default PlayerScore;