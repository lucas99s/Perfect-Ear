import { majorMemory } from "./notes.js";

export function processMusic() {
    var rows = document.querySelector('textarea').value.split("\n");
    for(let i = 0; i < rows.length; i++) {
        if(!rows[i].includes('/')){
            for(let j = 0; j < majorMemory.length; j++){
                if(rows[i].includes(majorMemory[j])) {
                    let row = rows[i]
                    rows[i] = row.replace(majorMemory[j], 'majorChords['+j+']')
                }
            }
            rows[i] = `<div>${rows[i]}</div>`
        } else if(rows[i].includes('/')) {
            let row = rows[i]
            rows[i] = row.replaceAll('/', '')
            rows[i] = `<div>${rows[i]}</div>`
        }
    }
    console.log(rows)
    document.getElementById('display').innerHTML = rows
}