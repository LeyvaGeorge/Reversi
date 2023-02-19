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

let turn = 'black';

class tileInfo {    //Start of class ********************* 
    constructor(Name,Tile){
        this.name = Name
        this.tile = Tile;
        
    }
    logg() {
        console.log(this.name)
        console.log(this.tile)
    }
    changeColor() {

        let divName = document.getElementById(`${this.name}`);
        divName.addEventListener("click", () =>{
            if(this.tile == false){
                if(turn == 'black'){
                    divName.style.background = "black";
                    turn = 'white'
                } else {
                    divName.style.background = "white";
                    turn = 'black'
                }
                    
            } else {
                console.log("Tile is already contains a peice")
            }
            
            this.tile = true;
            
            this.logg()
        });
        
    }   
}
let testArray = ['A1','A2','A3','A4','A5','A6','A7','A8']
for(let i = 0; i < testArray.length; i++){
    const Information = new tileInfo(testArray[i],false);//Constructor to class*****************
    Information.changeColor();
    
    
}


// for(let i = 0; i < row.length; i++) {
//     for(let j = 0; j < column.length; j++) {
//         let docUItem = document.getElementById(row[i] + column[j])
//         docUItem.classList.add(tileInfo)
//     }    
// }