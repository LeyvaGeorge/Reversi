const rowL = ['A','B','C','D','E','F','G','H'];
const columnN = ['1','2','3','4','5','6','7','8'];
const iconLink = document.getElementById('favicon');
let blackScore = document.getElementById('blkScore');
let whiteScore = document.getElementById('whtScore');
let playersTurn = document.getElementById('player');

//Tile is simple what the tile box contain
class tile { //=======================================================
    constructor(name,fill,color) {
        this.name = name;   //string. The name of tile
        this.fill = fill;   // T/F  if tile is occupied
        this.color = color; // string  White/Black which color tile
        
    }
    addPiece(){
        this.fill = true;
    }
    cngColor(color){
        this.color = color
        document.getElementById(this.name).style.background = color;
    } 
}

//Game class to add functionality to the game
class gameSystem extends tile{  //=====================================
    constructor(plrColor) {
        super();
        this.boxItems = {};
        this.scoreBlk ;
        this.scoreWht ;
        this.trnColor = plrColor //the players selects the Color
        //strtGame();
    }
    
    //Sets the Game 
    strtGame() {
        this.fillArray();
        this.scoreBlk = 0;
        this.scoreWht = 0;
        this.listen();
        if(this.trnColor == 'black')    //Check to see who starts the game
            playersTurn.innerHTML = `Black Starts`
        else {
            playersTurn.innerHTML = 'White Starts'
        }
    }

    fillArray() {
        for(let i = 0; i < rowL.length; i++) {
            for(let j = 0; j < columnN.length; j++) {
                let letNum = rowL[i] + columnN[j];
                if( letNum == "D4" || letNum == "E5"){
                    this.boxItems[letNum] = new tile(letNum,true,""); //Constructor to fill black tiles
                    this.boxItems[letNum].cngColor("black");
                }
                else if(letNum == "D5" || letNum == "E4") {
                    this.boxItems[letNum] = new tile(letNum,true,""); //constructor to fill white tiles
                    this.boxItems[letNum].cngColor("white")
                }
                else{
                    this.boxItems[letNum] = new tile(letNum,false,"");     //Constructor to class empty
                } 
            }
        }
        
        this.altrpoints();        
    }
    
    //This function checks all the collumns and rows to see if collor on blocks has changed and updates the board
    altrpoints(){ 
        let white = 0;
        let black = 0;
        
        for(let i = 0; i < rowL.length; i++) {
            for(let j = 0; j < columnN.length; j++) {
                let letNum = rowL[i] + columnN[j];
                if(this.boxItems[letNum].color == "black"){
                    black++;  
                }else if(this.boxItems[letNum].color == "white"){
                    white++;
                }else{}
            } 
        }
        blackScore.innerHTML =`Black: ${black}`
        whiteScore.innerHTML = `White: ${white}`
    }

    //Adds EventListener to the array
    listen() {
        for(let i = 0; i < rowL.length; i++) {
            for(let j = 0; j < columnN.length; j++) {
                let letNum = rowL[i] + columnN[j];
                let divName = document.getElementById(`${letNum}`);
                divName.addEventListener("click", () =>{
                    //Alter Code
                    
                    if(this.boxItems[`${letNum}`].fill == false){
                        if(this.trnColor == 'black'){
                            this.boxItems[`${letNum}`].cngColor("black");   //changes the background to black
                            this.boxItems[`${letNum}`].addPiece();          //changes it the tile to True
                            this.chngTurn();                                //updates the color to white->black of vice versa                        
                            this.getPieces(letNum,'black');
                            this.altrpoints();                              //Updates the score
                            iconLink.setAttribute("href","/Assets/whiteIcon.ico");
                        } else {
                            this.boxItems[`${letNum}`].cngColor("white")    //changes the background to White
                            this.boxItems[`${letNum}`].addPiece()           //changes it the tile to T
                            this.chngTurn();                                //updates the color to white->black of vice versa
                            this.getPieces(letNum,'white');
                            this.altrpoints();                              //updates the score
                            iconLink.setAttribute("href","/Assets/blackIcon.ico");
                        }          
                    } else {
                        alert("Tile is already contains a peice")
                    }
                })
            }
        }
               
    }
    chngTurn() {
        if(this.trnColor == 'black'){
            this.trnColor = 'white';
            playersTurn.innerHTML = "White's Turn"
        }else{
            this.trnColor = 'black';
            playersTurn.innerHTML = "Black's Turn"
        }
    }
    //=====================================================================

    //GET PIECES IS WORKING FINE
    getPieces(point,color){ //point is the players
        console.log('clicked at :' + point);                        //points to the name of the square in question
        
        let letter = point.charAt(0);             //gets letter from point
        let number = point.charAt(1);
        
        //Converting to create a 0 to 7 array
        let letterValue;        
        let numberValue;
        for(let i = 0; i < rowL.length; i++)
            if(letter == rowL[i])
                letterValue = i;                   //Converts to 0->7
        for(let j = 0; j < columnN.length; j++)
            if(number == columnN[j])
                numberValue = j
        
        this.isValidMove(letterValue,numberValue,color)       //Passes the letter and number 
    }

    //Find issue
    isValidMove(row,col,player){
        let oponentColor = (player == 'white') ? 'black' : 'white';
        let directions =[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
        
        
        //Cycles to look around the clicked tile to find any valid apponents to flip
        for(let i =0; i < directions.length; i++){  
            let r = row + directions[i][0];     //gets the row value +/@/- 1 
            let c = col + directions[i][1];     //gets the column value +/- 1 and @
            let xy = rowL[r] + columnN[c];      //converts it back to row and column values IE'A1,etc.'
            //let flips=0;                      /GPT CODE not sure why it's needed
            
            //A way to stay inside the array
            if(r >= 0 && r < 8 && c >=0 && c < 8){
                
                if (this.boxItems[`${xy}`].color == oponentColor){ //Enemy is located
                    console.log(`${xy} has: ${this.boxItems[`${xy}`].color}  color`)        //Testing to find only opponents 88888888888888888888888888888
                    
                    //row,collumn,playerColor,opponentColor,direction looking at
                    let valid = this.rabbitHole(r,c,player,oponentColor,directions[i])//pass function to keep looking deeper in that direction
                    if (valid == true){//if True flip enemy tile
                        this.boxItems[`${xy}`].cngColor(player);
                    }
                } else {}//nothig was done
            }
        }
        // return
    }
    rabbitHole(row,collumn,playerColor,opponentColor,direction/* TODO PASS DIRECTION TO KEEP GOING DOWN THE RABBIT HOLE */){   
        //moves the view  further into the direction
        row += direction[0];        
        collumn += direction[1];
        let xy = rowL[row] + columnN[collumn]
        console.log(xy)
        if(row >= 0 && row < 8 && collumn >=0 && collumn < 8){                   //stops form going out of bounds
            if( this.boxItems[`${xy}`].color == playerColor/*friendly found */){    //Found a friendly tile
                return true
            } else if(this.boxItems[`${xy}`].color == opponentColor){               //opponent must look deeper into the view direction
                let valid = this.rabbitHole(row,collumn,playerColor,opponentColor,direction)
                if(valid == true) {
                    this.boxItems[`${xy}`].cngColor(playerColor);
                    return true;    //keep the cycle true till out of loop
                } else {
                    return false;   //do nothing either out of bounds or tile had nothing
                }
            }
        }
        return false;
    }
    //Function(){
    //}   
}

let GAME = new gameSystem("black"); //GAME IS SET
GAME.strtGame();                    //START GAME    

// for(let i = 0; i < rowL.length; i++) {
//     for(let j = 0; j < columnN.length; j++) {
//         let letNum = rowL[i] + columnN[j];
//     }
// }