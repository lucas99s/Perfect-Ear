import { majorNote } from '../scripts/notes.js';
import { minorNote } from '../scripts/notes.js';
import { getId } from '../scripts/library.js';

let musicNotes = [majorNote[3], majorNote[5], majorNote[10], minorNote[7]];

console.log(majorNote)

/*
    0 = D#
    1 = F
    2 = A#
    3 = Gm
*/

export let saturnTone = musicNotes[2]
export let saturn =
    `
    <div class="container-stanza">
        <pre>  ${musicNotes[3]}             ${musicNotes[0]}         ${musicNotes[2]}              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">You taught me the courage of stars before you left</div>

        <pre>     ${musicNotes[3]}         ${musicNotes[0]}       ${musicNotes[2]}            ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">How light carries on endlessly, even after death</div>

        <pre>  ${musicNotes[3]}             ${musicNotes[0]}         ${musicNotes[2]}              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">With shortness of breath, you explained the infinite</div>
    </div>
    <div class="container-video">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dzNvk80XY9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `

getId('song').innerHTML = saturn