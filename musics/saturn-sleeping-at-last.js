import { majorNote } from '../scripts/notes.js';
import { minorNote } from '../scripts/notes.js';

let musicNotes = [majorNote[3], majorNote[5], majorNote[10], minorNote[7]];

console.log(majorNote)

/*
    0 = D#
    1 = F
    2 = A#
    3 = Gm
*/

export let saturnSleepingAtLast =
    `
    <div>
        <div>${musicNotes[3]}______${musicNotes[0]}_____${musicNotes[2]}___${musicNotes[1]}</div>
        You taught me the courage of stars before you left
    </div>
    `