const rowL = ['A','B','C','D','E','F','G','H'];
const columnN = ['1','2','3','4','5','6','7','8'];
let blackScore = document.getElementById('blkScore');
let whiteScore = document.getElementById('whtScore');
let playersTurn = document.getElementById('player');

class tile {
    constructor(Name,Fill,Color) {
        this.name = Name;   //string. The name of tile
        this.fill = Fill;   // T/F  if tile is occupied
        this.color = Color; // string  White/Black which color tile
        
    }
    addPiece(){
        this.fill = T;
    }
    cngColor(color){
        document.getElementById(this.name).style.background = color;
    } 
}

class gameSystem extends tile{
    constructor(plrColor) {
        super();
        this.boxItems = {};
        this.scoreBlk ;
        this.scoreWht ;
        this.trnColor = plrColor //the players selects the Color
        //strtGame();
    }
    strtGame() {
        this.fillArray();
        this.scoreBlk = 0;
        this.scoreWht = 0;
    }
    fillArray() {
        for(let i = 0; i < rowL.length; i++) {
            for(let j = 0; j < columnN.length; j++) {
                let letNum = rowL[i] + columnN[j];
                if( letNum == "D4" || letNum == "E5"){
                    this.boxItems[letNum] = new tile(letNum,true,""); //Constructor to fill black tiles
                    this.boxItems[letNum].cngColor("black")
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
    }
    chngColor(){
        for(let i = 0; i < rowL.length; i++) {
            for(let j = 0; j < columnN.length; j++) {
                let letNum = rowL[i] + columnN[j];
                let divName = document.getElementById(`${letNum}`);
            }
        }    
    }
    //Function(){
    //}   
}

let GAME = new gameSystem("black");
GAME.strtGame();

// ******==========********    OLD CODE ********==========******


// let row = ['A','B','C','D','E','F','G','H']
// let column = ['1','2','3','4','5','6','7','8']

// for(let i = 0; i < row.length; i++) {
//     for(let j = 0; j < column.length; j++) {
//         document.getElementById(row[i] + column[j]).addEventListener("click",() => {
//             document.getElementById(row[i] + column[j]).style.background = "blue";
//             let
//         })
//     }    
// }

// let turn = 'black';
// let blk = 0;
// let wht = 0;


// class tileInfo {    //Start of class ********************* 
//     constructor(Name,Tile){
//         this.name = Name;   //String. Name of the square 
//         this.tile = Tile;   //Bool. if tile is present
        
//     }
//     logg() {        //console logs the infomation selected
//         console.log(this.name)
//         console.log(this.tile)
//     }
//     plyrTurn(color) { // Changes the text in the footer to reflect who's turn it is.
//         if(color == 'black')
//             playersTurn.innerHTML = 'Black'
//         else
//             playersTurn.innerHTML = 'White'    
//     }
//     cngAddBlkScore( ){
//         blk++;
//         console.log(blk)
//         console.log(wht)
//         blackScore.innerHTML = `Black: ${blk}`
//     }
//     cngAddWhtScore() {
//         wht++;
//         console.log(blk)
//         console.log(wht)
//         whiteScore.innerHTML = `White: ${wht}`
//     }
//     changeColor() {
//         let divName = document.getElementById(`${this.name}`);
//         divName.addEventListener("click", () =>{
//             if(this.tile == false){
//                 if(turn == 'black'){
//                     divName.style.background = "black";
//                     turn = 'white'
//                     this.tile = true;
//                     this.plyrTurn(turn);
//                     this.cngAddBlkScore();
//                 } else {
//                     divName.style.background = "white";
//                     turn = 'black'
//                     this.tile = true;
//                     this.plyrTurn(turn);
//                     this.cngAddWhtScore();
                    
//                 }          
//             } else {
//                 console.log("Tile is already contains a peice")
//             }
//             //this.logg()
//         });  
//     }   
// }
// //Creates the Array of the first row to test
// /*let testArray = ['A1','A2','A3','A4','A5','A6','A7','A8']
// for(let i = 0; i < testArray.length; i++){
//     const Information = new tileInfo(testArray[i],false);//Constructor to class*****************
//     Information.changeColor();
// }*/


//  let row = ['A','B','C','D','E','F','G','H']
//  let column = ['1','2','3','4','5','6','7','8']
// const variables = {};
// for(let i = 0; i < row.length; i++) {
//     for(let j = 0; j < column.length; j++) {
//         let letNum = row[i] + column[j];
//         variables[letNum] = new tileInfo(row[i] + column[j],false);//Constructor to class*****************
//         variables[letNum].changeColor();
//         // if (row[i] + column[j] == 'D4'){
//         //     Information.click();
//         // }
//     }
// }    


// //         Changing the footers see who's turn is it

// playersTurn.innerHTML = 'Black' 


// // if (turn == 'black'){
// //    } else {
// //     playersTurn.innerHTML = 'White'
// // }