import './style.css';

function ArrowDown(currentPlayer = 1) { 
    return /*html*/ `    
        <img class='arrow-down'
             data-currentPlayer = "${currentPlayer}" 
             src='../../images/arrow-down.png' 
             alt='Arrow down icon'>

    `
};

export default ArrowDown;