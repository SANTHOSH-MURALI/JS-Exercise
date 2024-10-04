var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    //initialize the 3x3 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "";

            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);  
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd); 

            document.getElementById("board").append(tile);
        }
    }
    
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); 
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";

        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);   
        tile.addEventListener("drop", dragDrop);       
        tile.addEventListener("dragend", dragEnd);      

        document.getElementById("pieces").append(tile);
    }
}


function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    otherTile = this; 
}

function dragEnd() {
    //Swap tiles current Tile and the other Tile
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

}
