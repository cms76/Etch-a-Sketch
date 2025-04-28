console.log('Hello from etch a sketch');

const square = document.querySelector('#square');

RepaintSquareItems(16);

function ButtonClicked()
{
    let userInput = prompt("Your choice (enter a number between 1 and 100):");
    const number = parseInt(userInput, 10);
    if (!(!isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 100))
    {
        alert("Plese try again, and enter a number between 1 and 100.)");
    }
    else
    {
        RepaintSquareItems(number);
    }

}

function RepaintSquareItems(length)
{
    square.replaceChildren();
    for (i = 0; i < length; i++)
    {
        for (j = 0; j < length; j++)
        {
            const squareItem = document.createElement("div");
            squareItem.classList.add('squareItem');
            squareItem.style.flex = `1 0 calc(100% / ${length})`;
            squareItem.addEventListener("mouseover", SquareHover);
            square.appendChild(squareItem);  
            square.style.background = `rgba(255, 255, 255, 0)`; 
        }
    }
} 

function SquareHover(e)
{
    const square = e.target;
    let currentStyle = window.getComputedStyle(square);
    let red, green, blue, opacity;
    let rgbColor = currentStyle.backgroundColor
    // Regular expression to extract the numeric values
    const matches = rgbColor.match(/\d+(\.\d+)?/g);

    // Parse the values into integers
    if (matches) {
        red = parseInt(matches[0], 10);
        green = parseInt(matches[1], 10);
        blue = parseInt(matches[2], 10);
        opacity = matches[3] ? parseFloat(matches[3]) : 1;
    }
    // only set the color once, set the opacity to 0.1 initially
    if (red == 255 && green == 255 && blue == 255)
    {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        opacity = 0;
    }     
    // increment the opacity with each interaction
    opacity = Math.min(1.0, opacity + 0.1);
    square.style.background = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

}