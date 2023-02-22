const rowL = ['A','B','C','D','E','F','G','H'];
const columnN = ['1','2','3','4','5','6','7','8'];
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
        playersTurn.innerHTML = `${this.addPiece.trnColor}'s Color`
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
                        } else {
                            this.boxItems[`${letNum}`].cngColor("white")    //changes the background to black
                            this.boxItems[`${letNum}`].addPiece()           //changes it the tile to T
                            this.chngTurn();                                //updates the color to white->black of vice versa
                           this.getPieces(letNum,'white');
                            this.altrpoints();                              //updates the score
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
    getPieces(point,color){ //point is the players
        console.log(point);
        
        let letter = point.charAt(0);             //gets letter from point
        let number = point.charAt(1);
        
        //Converting to create a 0 to 7 array
        let letterValue;        
        let numberValue;
        for(let i = 0; i < rowL.length; i++)
            if(letter == rowL[i])
                letterValue = i;
        for(let j = 0; j < columnN.length; j++)
            if(number == columnN[j])
                numberValue = j
        console.log(`letter:${letterValue}  Number: ${numberValue}`)
        this.isValidMove(letterValue,numberValue,color,point)
        //find pieces around
        
        
        //continue to search



        
    }

    isValidMove(row,col,player,point){
        let oponentColor = (player == 'white') ? 'black' : 'white';
        let directions =[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0][1,1]]
        for(let i =0; i < directions.length; i++){
            let r = row + directions[i][0];     //gets the row value +/- 1 and at
            let c = col + directions[i][1];     //gets the column value +/- 1 and at
            let xy = rowL[r] + columnN[c];      //converts it back to row and column values IE'A1,etc.'
            let flips=0;
            while(r >= 0 && r < 8 && c >=0 && c < 8 && this.boxItems[`${xy}`].color == oponentColor){
                r += directions[i][0];
                c += directions[i][1];
                if(this.isValidMove() == true){

                }
                

            }
            if(r >= 0 && r < 8 && c >=0 && c < 8 && this.boxItems[`${xy}`].color == player)
            return true;
        }
        return//nothig was done
    }
    
    //Function(){
    //}   
}

let GAME = new gameSystem("black");
GAME.strtGame();

// for(let i = 0; i < rowL.length; i++) {
//     for(let j = 0; j < columnN.length; j++) {
//         let letNum = rowL[i] + columnN[j];
//     }
// }