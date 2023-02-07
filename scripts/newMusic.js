import { majorMemory } from "./notes.js";

export function processMusic() {
    var rows = document.querySelector('textarea').value.split("\n");
    for(let i = 0; i < rows.length; i++) {
        if(!rows[i].includes('*')){
            let chord = rows[i].split(' ')
            let subs = ''
            chord.forEach(obj => {
                if(obj != ''){
                    for(let j = 0; j < majorMemory.length; j++){
                        if(obj.includes(majorMemory[j])) {
                            if(obj.includes('#')) {
                                subs += obj.replace(majorMemory[j], `majorChords[${j + 1}]`)
                                j++
                            } else if(obj.includes('b')) {
                                subs += obj.replace(majorMemory[j], `majorChords[${ j - 1}]`)
                            } else {
                                subs += obj.replace(majorMemory[j], `majorChords[${ j }]`)
                            }
                        }
                    }
                } else if(obj == '') {
                    subs += ' '
                }
            })
            subs = subs.replaceAll('#', '')
            subs = subs.replaceAll('b', '')
            rows[i] = subs
            rows[i] = `<div>${rows[i]}</div>`
        } else if(rows[i].includes('*')) {
            let row = rows[i]
            rows[i] = row.replaceAll('*', '')
            rows[i] = `<div>${rows[i]}</div>`
        }
    }
    console.log(rows)
    document.getElementById('display').innerHTML = rows
}


function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}