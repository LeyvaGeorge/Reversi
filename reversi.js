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



class tileInfo {
    constructor(Name,Tile){
        this.name = Name
        this.tile = Tile;
        
    }
    log() {
        console.log(this.name)
    }
    changeColor() {

        let divName = document.getElementById(`${this.name}`);
        divName.addEventListener("click", () =>{
            divName.style.background = "blue";
        });
        //
    }   
}
let testArray = ['A1','A2','A3','A4','A5','A6','A7','A8']
for(let i = 0; i < testArray.length; i++){
    //TODO
}
const Information = new tileInfo('A1',false);
Information.changeColor();

// for(let i = 0; i < row.length; i++) {
//     for(let j = 0; j < column.length; j++) {
//         let docUItem = document.getElementById(row[i] + column[j])
//         docUItem.classList.add(tileInfo)
//     }    
// }