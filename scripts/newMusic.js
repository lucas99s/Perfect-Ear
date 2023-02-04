import { majorMemory } from "./notes.js";

export function processMusic() {
    var rows = document.querySelector('textarea').value.split("\n");

    for(let i = 0; i < rows.length; i++) {
        if(true){
            for(let j = 0; j < majorMemory.length; j++){
                if(rows[i].includes(majorMemory[j])) {
                    let row = rows[i]
                    
                    rows[i] = row.replace(majorMemory[j], 'majorMemory['+j+']')
                    console.log(rows)
                }
            }
        }
    }

    // console.log(rows)
}